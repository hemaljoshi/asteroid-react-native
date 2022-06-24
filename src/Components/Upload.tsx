import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DocumentPicker from 'react-native-document-picker';
import AppBar from '../Navigators/AppBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}
interface State {
  fileName: string;
  file: any;
}
export default class Upload extends Component<Props, State> {
  state: State = {
    fileName: '',
    file: [],
  };
  firstBtn = {
    title: 'Back',
    onPress: () => {
      this.props.navigation.goBack();
    },
  };
  selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res);
      //   var file = {
      //     uri: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri,
      //     name: res.name,
      //     type: res.type,
      //   };
      //   this.setState({ fileName: res.name, filePath: file });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  render() {
    return (
      <>
        <AppBar title='Upload' firstBtn={this.firstBtn} />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.selectFile}
          >
            <Text style={styles.buttonTextStyle}>Select 📑</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '30%',
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#8887ff',
    padding: 7,
    alignItems: 'center',
  },
  buttonTextStyle: { color: 'white', fontWeight: '600' },
});
