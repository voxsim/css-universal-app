import React, { Component } from 'react';
import logo from './logo.svg';
import styled from "styled-components";

const runApp = (platformComponent) => {
  const AppHeader = styled(platformComponent('div'))`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  `;

  const Logo = styled(platformComponent('img'))`
    height: 80px;
  `;

  const AppIntro = styled(platformComponent('p'))`
    font-size: 18px;
  `;

  const AppBody = styled(platformComponent('div'))`
    text-align: center;
  `;

  const Title = styled(platformComponent('p'))`
    font-size: 24px;
  `;

  return class App extends Component {
    render() {
      return (
        <AppBody>
          <AppHeader>
            <Logo src={logo} alt="logo" />
            <Title>Welcome to React</Title>
          </AppHeader>
          <AppIntro>
            To get started, edit src/App.js and save to reload.
          </AppIntro>
        </AppBody>
      );
    }
  }
}

export default runApp;
