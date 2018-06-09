import React, { Component } from "react";
import "./App.css";
import InputForm from "./components/inputForm";
import ResultsForm from "./components/results";
import SavedForm from "./components/saved";
import axios from 'Axios';

class App extends Component {
  componentDidMount() {
    axios.post('/users', {
      name: 'Pablo',
      email: 'this@email.com'
    })
      .then(r => {
        console.log(r)
        axios.get('/users')
          .then(r => {
            console.log("Added" + r.name + r.email)
          })
          .catch(e => {
            console.log(e)
          })
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    return (
      <div className="container">

        <p className="App-intro">
          <h1 className="headerText">The New York Times Scraper.....again....(in React)</h1>
        </p>
        <InputForm />
        <ResultsForm />
        <SavedForm />
      </div>
    );
  }
}

export default App;
