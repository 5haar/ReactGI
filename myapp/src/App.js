import './App.css';
import Veryeasy from './components/veryeasy.jsx';
import BasicInfo from './components/basicinfo';
import React from 'react';

// All steps complete. Medium is in BasicInfo.jsx, Hard is in here (App.js)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      employees: [
        {
          name: 'Shaar',
          company: 'E. Corp',
          position: 'Analyst'
        },
        {
          name: 'Elliot Alderson',
          company: 'E. Corp',
          position: 'Software Engineer'
        },
        {
          name: 'Mr. Robot',
          company: 'None',
          position: '...'
        },
        {
          name: 'Krista',
          company: 'NYC Therapist Union',
          position: 'Behavorial Therapist'
        },
        {
          name: 'White Rose',
          company: 'Dark Army',
          position: 'Leader'
        }
      ]
    }
  }
  render() {

    return (
      <div className="App">
        <section class="header">
        
        </section>
        {/* <Veryeasy /> */}
        {/* <BasicInfo /> */}
        {this.state.employees.map(employeeInfo =>{
          return <BasicInfo name={employeeInfo.name} company={employeeInfo.company} position={employeeInfo.position}/>
        })}
      </div>
    );
  }
}

export default App;
