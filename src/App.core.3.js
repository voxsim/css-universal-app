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
  height: 80px;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const AppBody = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

class App extends Component {
  render() {
    return (
      <AppBody>
        <AppHeader>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppBody>
    );
  }
}

export default App;
