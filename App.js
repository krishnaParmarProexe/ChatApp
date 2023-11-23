//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {
  CopilotProvider,
  CopilotStep,
  useCopilot,
  walkthroughable,
} from 'react-native-copilot';
import HomeScreen from './src/HomeScreen';
import TooltipComponent from './src/TooltipComponent';
import {MainStackNavigator} from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    // <View>
    //   <CopilotProvider
    //     labels={{
    //       previous: 'previous',
    //       next: 'next',
    //       skip: 'skip',
    //       finish: 'finish',
    //     }}
    //     tooltipComponent={<TooltipComponent />}>
    //     <HomeScreen />
    //   </CopilotProvider>
    // </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#2980b9',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
  },
  activeSwitchContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  eventContainer: {
    marginTop: 20,
  },
});

export default App;
