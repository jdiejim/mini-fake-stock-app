import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { URL } from './constants/URL';
import './App.css';
import StockList from './components/StockList';
import DetailsDisplay from './components/DetailsDisplay';

const Aside = styled.aside`
  height: 100vh;
  width: 300px;
  background-color: #F3F7FA
`

const Main = styled.main`
  display: flex;
`

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
    const { firms, data } = this.state;

    return (
      <Router>
        <Main>
          <Aside>
            <StockList markets={{ firms, data }} />
          </Aside>
          <Route exact={true} path="/" render={() => (
              <h1></h1>
          )} />
        <Route path="/t/:ticker" render={history => (
            <DetailsDisplay markets={{ firms, data }} match={history.match} />
          )} />
        </Main>
      </Router>
    );
  }
}

export default App;
