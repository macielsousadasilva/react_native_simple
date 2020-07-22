import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AppLoading } from "expo";
import Routes from './src/routes';

export default function App() {

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
