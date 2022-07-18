// VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with 
// your basic information for example name, number, date of birth and etc. 
// This div should be hard-coded to prepare for the Medium Challenge.

import React, { Component } from 'react';
export default class BasicInfo extends Component {
  render() {
    // Return JSX code
        
    return (
        // <div>
        // <section class ="personTile">
        //     <h1>Name: Shaar</h1>
        //     <h1>Date of Birth: 01/01/1999</h1>
        //     <h1>Number: 543-123-6245</h1>
        //     <h1>Company: E Corp</h1>
        //     <h1>Position: Analyst</h1>
        // </section>
        // </div>
      <div>
        <section class ="personTile">
            <h1>{this.state.name}</h1>
            <h1>{this.state.company}</h1>
            <h1>{this.state.position}</h1>
        </section>
      </div>
    );
  }
}