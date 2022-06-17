import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import axios from 'axios';

const apiKey = 'jbrG2AiyrWHFmHAm33QHdUdwBwjWnW2ZcCdmq7YO';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}
interface State {
  asteroidID: string;
}

export default class Asteroid extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      asteroidID: '',
    };
  }
  handleonChangeAsteroidId = (text: string) => {
    this.setState({
      asteroidID: text,
    });
  };

  onClickRandom = () => {
    axios
      .get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
      .then((res) => {
        const asteroidData = res?.data?.near_earth_objects;
        const random = Math.floor(Math.random() * asteroidData?.length);
        this.setState({
          asteroidID: asteroidData[random].id,
        });
      });
  };

  handleSubmit = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroidID}?api_key=${apiKey}`
      )
      .then((res) => {
        const data: any = res.data;
        this.props.navigation.navigate('info', { data: data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>Search Asteroid Data</Text>
          <TextInput
            value={this.state.asteroidID}
            style={styles.textInputStyle}
            onChangeText={this.handleonChangeAsteroidId}
          />
          <TouchableOpacity
            style={styles.randomButtonStyle}
            onPress={this.onClickRandom}
          >
            <Text style={styles.buttonTextStyle}>Random</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonTextStyle}>Submit</Text>
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
  titleText: {
    fontSize: 28,
    marginBottom: 5,
  },
  textInputStyle: {
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#8887ff',
    padding: 7,
    alignItems: 'center',
  },
  randomButtonStyle: {
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#524873',
    padding: 7,
    alignItems: 'center',
  },
  buttonTextStyle: { color: 'white', fontWeight: '600' },
});
