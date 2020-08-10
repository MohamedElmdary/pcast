import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';

import Navbar from '../components/Navbar';
import { Colors } from '../utils';
import { podcasts } from '../data';
import FullPodcast from '../components/main/FullPodcast';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={podcasts[0].image}
        style={[styles.image, styles.height]}
        resizeMode="cover"
        blurRadius={1}>
        <View
          style={[
            styles.height,
            {
              backgroundColor: Colors.opacityDarkBackground,
            },
          ]}>
          <Navbar />
          <ScrollView
            horizontal={true}
            style={{ paddingLeft: 33, paddingRight: 50 }}>
            {podcasts.map((podcast) => (
              <FullPodcast podcast={podcast} key={podcast.id} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.darkBackground,
  },
  image: {
    width: '100%',
    borderBottomLeftRadius: 70,
    overflow: 'hidden',
    zIndex: 1,
  },
  height: {
    height: 370,
  },
});

export default Main;
