import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { Component } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import axios from 'axios';

const apiKey = '6QaguSak47jKcQTU26GBRVVBxYwcVsYirSKM7Erq';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}
interface State {
  asteroidID: string;
  loading: boolean;
}

export default class Asteroid extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      asteroidID: '',
      loading: false,
    };
  }

  handleonChangeAsteroidId = (text: string) => {
    this.setState({
      asteroidID: text,
    });
  };

  onClickRandom = () => {
    this.setState({
      loading: true,
    });
    axios
      .get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
      .then((res) => {
        const asteroidData = res?.data?.near_earth_objects;
        const random = Math.floor(Math.random() * asteroidData?.length);
        this.setState({
          asteroidID: asteroidData[random].id,
          loading: false,
        });
      })
      .catch((err) => {
        alert(err);
        this.setState({
          loading: false,
        });
      });
  };

  handleSubmit = () => {
    this.setState({
      loading: true,
    });
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroidID}?api_key=${apiKey}`
      )
      .then((res) => {
        const data: any = res.data;
        this.props.navigation.navigate('info', { data: data });
        this.setState({
          asteroidID: '',
          loading: false,
        });
      })
      .catch((err) => {
        Alert.alert('Error Occured', `${err}`, [{ text: 'Okay' }]);
        this.setState({
          asteroidID: '',
          loading: false,
        });
      });
  };

  render() {
    const { loading, asteroidID } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.container}>
            <ActivityIndicator size='large' />
          </View>
        ) : (
          <View style={styles.subContainer}>
            <Text style={styles.titleText}>Search Asteroid Data</Text>
            <TextInput
              value={asteroidID}
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
        )}
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
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 0.1,
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
