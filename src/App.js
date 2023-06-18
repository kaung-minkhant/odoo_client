import { React, Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  // fetch_api = async () => {
  //   const response = await fetch("https://api.polarserver1.cloud/odoo_rest/patient")
  //   const patients = await response.json();
  //   return patients
  // }
  // async componentDidMount() {
  //   const patients = await this.fetch_api()
  //   console.log(patients)
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
