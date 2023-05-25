/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Row({ children }: PropsWithChildren<{}>) {
  return (
    <View style={{ flexDirection: 'row', columnGap: 15 }}>
      {children}
    </View>
  );
}

function App(): JSX.Element {
  const [counter, setCounter] = useState(0);



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Row>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </Row>

        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />


      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  box: {
    flexGrow: 1,
    height: 100,
    backgroundColor: 'white',
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.17,
  },
  container: {
    paddingHorizontal: 15,
    // gap: 15,
    rowGap: 15,
  }
});