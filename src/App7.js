import React, { Component } from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import { Text, View, Image } from 'react-native';

const dispatch = (component, platform) => {
  if(platform === 'web') {
    return component;
  }

  const reactToReactNative = {
    'div': View,
    'p': Text,
    'img':  ({src, alt}) => <Image source={src} alt={alt} />
  }

  return reactToReactNative[component];
}

const runApp = (platform) => {
  const AppHeader = styled(dispatch('div', platform))`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  `;

  const Logo = styled(dispatch('img', platform))`
    height: 80px;
  `;

  const AppIntro = styled(dispatch('p', platform))`
    font-size: 18px;
  `;

  const AppBody = styled(dispatch('div', platform))`
    text-align: center;
  `;

  const Title = styled(dispatch('p', platform))`
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
