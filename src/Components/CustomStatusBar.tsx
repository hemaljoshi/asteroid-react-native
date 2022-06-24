import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
interface props {
  backgroundColor?: string;
  barStyle?: 'dark-content' | 'light-content' | 'default';
}
const CustomStatusBar: React.FC<props> = ({
  backgroundColor,
  barStyle = 'dark-content',
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor ? backgroundColor : 'white'}
        barStyle={barStyle ? barStyle : 'dark-content'}
      />
    </View>
  );
};
export default CustomStatusBar;
