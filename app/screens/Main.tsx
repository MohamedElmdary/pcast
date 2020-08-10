import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';

import Navbar from '../components/Navbar';
import { Colors, Fonts } from '../utils';
import { podcasts, otherPodcasts, authors } from '../data';
import FullPodcast from '../components/main/FullPodcast';
import OtherPodcast from '../components/main/OtherPodcast';
import SubLinks from '../components/main/SubLinks';
import PodcastAuthor from '../components/main/PodcastAuthor';

const Main: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 40 }}>
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
      <View style={{ paddingLeft: 33 }}>
        <Text style={[Fonts.medium, { fontSize: 24, marginBottom: 24 }]}>
          Listen podcasts
        </Text>
        <SubLinks links={['Recent', 'Topics', 'Authors', 'Episodes']} />
        <View
          style={{
            borderBottomColor: 'rgba(255, 255, 255, 0.1)',
            borderBottomWidth: 1,
            marginBottom: 48,
            paddingBottom: 48,
          }}>
          <ScrollView
            horizontal={true}
            style={{
              paddingBottom: 20,
            }}>
            {otherPodcasts.map((poscast) => (
              <OtherPodcast podcast={poscast} key={poscast.id} />
            ))}
          </ScrollView>
        </View>
        <View>
          <Text style={[Fonts.medium, { fontSize: 24, marginBottom: 24 }]}>
            Podcasts authors
          </Text>
          <SubLinks links={['Recent', 'Most podcasts', 'Most followed']} />
          <ScrollView horizontal={true} style={{ paddingBottom: 50 }}>
            {[
              authors.harlod,
              authors.gregory,
              authors.leslie,
              authors.rosemary,
              authors.harlod,
            ].map((author, i) => (
              <PodcastAuthor author={author} key={i} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
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
