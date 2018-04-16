import React, { Component } from 'react';
import logo from './logo.svg';
import styled from "styled-components";

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const App = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

class App2 extends Component {
  render() {
    return (
      <App>
        <AppHeader>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </App>
    );
  }
}

export default App2;
