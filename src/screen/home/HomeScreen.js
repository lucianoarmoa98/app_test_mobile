import React, { Component, useEffect, useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


const HomeScreen = () => {

    let url = 'http://192.168.0.7:3000'




  return (
    <View style={{ flex: 1 }}>
        <WebView
            source={{ uri: url }}
            style={{ marginTop: 20 }}
        />

    </View>
  );
}

export default HomeScreen;