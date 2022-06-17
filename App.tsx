import { StatusBar } from 'expo-status-bar';
import { Component, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Asteroid from './src/Asteroid';
import AsteroidInfo from './src/AsteroidInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='home' component={Asteroid} />
          <Stack.Screen name='info' component={AsteroidInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
