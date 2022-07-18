// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ 
// in the constructor.  Then take the returned ‘div’ and create a component, 
// pass state into it and import it as ‘BasicInfo’. (This challenge should 
// not change the look of the page)
import React from 'react'
import './employees.css';
class BasicInfo extends React.Component {
    constructor(props) {
        super(props)
        // Declaring State
        this.state = {
            person: {
                name: props.name,
                company: props.company,
                position: props.position
            }
        };
    }
    render () {
        return (
            <div className='App'>
                <section class="employees">
                    <section class ="personTile">
                        <h1>{`Name: ${this.state.person.name}`}</h1>
                        <h1>{`Company: ${this.state.person.company}`}</h1>
                        <h1>{`Position: ${this.state.person.position}`}</h1>
                    </section>
                </section>
            </div>
        );
    }
}
export default BasicInfo;