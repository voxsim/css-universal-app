import React, { Component } from 'react';
import logo from './logo.svg';
import { Text, View, Image } from 'react-native';
import styled from "styled-components";

const AppHeader = styled.View`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.Image`
  height: 80px;
`;

const AppIntro = styled.Text`
  font-size: 18px;
`;

const AppBody = styled.View`
  text-align: center;
`;

const Title = styled.Text`
  font-size: 24px;
`;

class App extends Component {
  render() {
    return (
      <AppBody>
        <AppHeader>
          <Logo source={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </AppHeader>
        <AppIntro>
          To get started, edit src/App.js and save to reload.
        </AppIntro>
      </AppBody>
    );
  }
}

export default App;
