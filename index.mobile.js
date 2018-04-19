import Expo from 'expo';
import App from './src/App6';
import React from 'react';
import {View, Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

const mobileComponent = (component) => {
  const reactToReactNative = {
    'div': View,
    'p': Text,
    'img':  ({src, alt}) => <SvgUri source={src} alt={alt} width="113" height="80" />
  };
  return reactToReactNative[component];
}

Expo.registerRootComponent(App(mobileComponent));
