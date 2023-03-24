import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { WebView } from 'react-native-webview';
const LINKS = [
  {
    title: 'North America',
    url: 'https://en.wikipedia.org/wiki/North_America',
    buttonStyle: {
      backgroundColor: '#f9c2ff',
      borderRadius: 30,
    },
    textStyle: {
      color: '#FFFFFF',
    },
    id: 100,
  },
  {
    title: 'South America',
    url: 'https://en.wikipedia.org/wiki/South_America',
    buttonStyle: {
      backgroundColor: '#324ca8',
      borderColor: '#000000',
      borderStyle: 'solid',
      borderWidth: 5,
    },
    textStyle: {
      color: '#bd4500',
    },
    id: 101,
  },
  {
    title: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Europe',
    buttonStyle: {
      backgroundColor: '#820007',
    },
    textStyle: {
      color: '#00bd4b',
    },
    id: 102,
  },
  {
    title: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Asia',
    buttonStyle: {
      backgroundColor: '#000000',
    },
    textStyle: {
      color: '#FFFFFF',
    },
    id: 103,
  },
  {
    title: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Africa',
    buttonStyle: {
      backgroundColor: '#00bdb0',
    },
    textStyle: {
      color: '#4b5958',
    },
    id: 104,
  },
  {
    title: 'Australia',
    url: 'https://en.wikipedia.org/wiki/Australia_(continent)',
    buttonStyle: {
      backgroundColor: '#e000f5',
    },
    textStyle: {
      color: '#eac2ed',
    },
    id: 105,
  },
  {
    title: 'Antarctica',
    url: 'https://en.wikipedia.org/wiki/Antarctica',
    buttonStyle: {
      backgroundColor: '#eeff00',
    },
    textStyle: {
      color: '#0022ff',
    },
    id: 106,
  },
];

const LinkRender = ({ title, url, buttonStyle, textStyle, setWebViewUrl }) => {
  return (
    <ButtonRender
      title={title}
      buttonStyle={buttonStyle}
      textStyle={textStyle}
      setWebViewUrl={setWebViewUrl}
      url={url}
    />
  );
};

const ButtonRender = ({ title, buttonStyle, textStyle, setWebViewUrl, url }) => {
  const handleLinkClick = () => {
    setWebViewUrl(url);
  };

  return (
    <CustomButton title={title} buttonStyle={buttonStyle} textStyle={textStyle} onPress={() => handleLinkClick()} />
  );
};

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[buttonStyle, styles.button]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [webViewUrl, setWebViewUrl] = useState('');

  return (
    <View style={styles.container}>
      {webViewUrl ? (
        <>
          <WebView source={{ uri: webViewUrl }} />
          <CustomButton title="Close" onPress={() => setWebViewUrl('')} buttonStyle={{ backgroundColor: 'red' }} />
        </>
      ) : (
        <FlatList
          data={LINKS}
          renderItem={({ item }) => (
            <LinkRender
              title={item.title}
              buttonStyle={item.buttonStyle}
              textStyle={item.textStyle}
              url={item.url}
              setWebViewUrl={setWebViewUrl}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
  },
  button: {
    padding: 15,
  },
  buttonText: {
    fontSize: 32,
    textAlign: 'center',
  },
  webView: {
    marginTop: 20,
    flex: 1,
  },
});

export default App;