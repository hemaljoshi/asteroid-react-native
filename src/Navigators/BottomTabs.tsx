import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../Icons/HomeIcon';
import Asteroid from '../Components/Asteroid';
import AsteroidInfo from '../Components/AsteroidInfo';
import InfoIcon from '../Icons/InfoIcon';
import Upload from '../Components/Upload';

const BootomTab = createBottomTabNavigator();

export default class BottomTabs extends Component {
  render() {
    return (
      <BootomTab.Navigator screenOptions={{ headerShown: false }}>
        <BootomTab.Screen
          name='Home'
          component={Asteroid}
          options={{
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
          }}
        />
        <BootomTab.Screen
          name='Info'
          component={AsteroidInfo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <InfoIcon color={color} size={size} />
            ),
          }}
        />
        <BootomTab.Screen
          name='Upload'
          component={Upload}
          options={{
            tabBarIcon: ({ color, size }) => (
              <InfoIcon color={color} size={size} />
            ),
          }}
        />
      </BootomTab.Navigator>
    );
  }
}
