import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { URL } from './constants/URL';
import './App.css';

const Header = styled.section`
  background-color: blue;
  margin: 20px auto;
  width: 100px;
  height: 200px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      firms: [],
      data: [],
    }
  }

  componentDidMount() {
    this.downloadMarketData();
  }

  downloadMarketData() {
    fetch(URL)
    .then(response => response.json())
    .then(market => {
      const { firms, data } = market;
      this.setState({ firms, data });
    })
    .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="App">
        <Header>
          trolololo
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Header>
      </div>
    );
  }
}

export default App;
