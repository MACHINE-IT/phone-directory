import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/*<div className="header">
          Phone Directory
        </div>
        <button>Add</button>
        <div>
          <span>Name</span>
          <span>Phone Number</span>
    </div>*/}
    <label htmlFor="name">Name: </label>
    <input id="name" type="text" placeholder="type here" defaultValue="Yogesh Kumar"/>    
      </div>
    );
  }
}


export default App;
