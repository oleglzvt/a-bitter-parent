import React, { Component } from 'react';
import ApiCalls from './ApiCalls.js'
import './index.css';

class App extends Component {


  render() {
    return (
      <div className="app wrapper">
        <h1>A Bitter Parent</h1>
        <p className="appDescription"> I am a parent and I am bitter at my core. Whenever my child suggests eating a sweet treat, I suggest an alternative, less sweet option. In addition, I will tell you how much less sugar the alternative has and let you save the returned pair in our database. Select a meal from the suggested option and I will do the rest for you. </p>
        <ApiCalls />

      </div>
    )
  }
}



  export default App;
