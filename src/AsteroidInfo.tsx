import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { data: any } }, 'params'>;
}

export default class AsteroidInfo extends Component<Props> {
  render() {
    const { goBack } = this.props.navigation;
    const data = this.props.route.params.data;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleStyle}>Asteroid Data</Text>
          <Text style={styles.textStyle}>Name: {data?.name}</Text>
          <Text style={styles.textStyle}>
            Nasa JPL URL: {data?.nasa_jpl_url}
          </Text>
          <Text style={styles.textStyle}>
            Is potentially hazardous asteroid:{' '}
            {` ${data?.is_potentially_hazardous_asteroid}`}
          </Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => goBack()}>
            <Text style={styles.buttonTextStyle}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    padding: 38,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  titleStyle: {
    fontSize: 28,
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 5,
  },
  buttonStyle: {
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#4cb742',
    padding: 7,
    alignItems: 'center',
  },
  buttonTextStyle: { color: 'white', fontWeight: '600' },
});
