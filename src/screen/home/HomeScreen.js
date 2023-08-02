import React, { Component, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


const HomeScreen = () => {
  const refWebView = useRef(null);

    let url = 'http://192.168.0.7:3000'


    //recibir mensaje desde el navegador usando el evento onMessage
    const onMessage = (event) => {
        console.log('event', event.nativeEvent.data);
        //enviar mensaje al navegador
        refWebView.current.postMessage('Luciano');
    }




  return (
    <View style={{ flex: 1 }}>
        <WebView
            ref={refWebView}
            source={{ uri: url }}
            // style={{ marginTop: 20 }}
            onMessage={onMessage}
        />

    </View>
  );
}

export default HomeScreen;