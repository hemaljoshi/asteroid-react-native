import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, { Component } from 'react';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

interface asteroidData {
  // response: {
  //   name: string;
  //   nasa_jpl_url: string;
  //   is_potentially_hazardous_asteroid: boolean;
  // };
}

interface Props {
  route: RouteProp<{ params: { data: any } }, 'params'>;
}

export default class AsteroidInfo extends Component<Props> {
  render() {
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
});
