import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import { Podcast } from '../../types';
import { Fonts, Colors, GlobalStyles } from '../../utils';

const OtherPodcast: React.FC<{ podcast: Podcast }> = ({ podcast }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={podcast.image} style={styles.image}>
        <LinearGradient
          colors={['rgba(9, 18, 28, 0.85)', 'rgba(0, 0, 0, 0)']}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={{ height: '100%' }}
        />
      </ImageBackground>
      <Text style={[Fonts.medium, { fontSize: 14, marginBottom: 14 }]}>
        {podcast.name}
      </Text>
      <View
        style={[
          GlobalStyles.flexRowCenter,
          { justifyContent: 'space-between' },
        ]}>
        <View>
          <View style={[GlobalStyles.flexRowCenter, { marginBottom: 8 }]}>
            <AntDesignIcon
              name="clockcircleo"
              size={13}
              color={Colors.gray}
              style={{ marginRight: 8 }}
            />
            <Text style={[Fonts.regular, { fontSize: 12, color: Colors.gray }]}>
              {podcast.length.join(':')}
            </Text>
          </View>
          <View style={GlobalStyles.flexRowCenter}>
            <Image
              source={podcast.author.image}
              style={{ height: 16, width: 16, marginRight: 8 }}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="clip"
              style={[Fonts.regular, { fontSize: 12 }]}>
              {podcast.author.name}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 32,
              width: 32,
              borderRadius: 16,
              backgroundColor: Colors.blue,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IonIcons name="play-outline" size={16} color={Colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 147,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 136,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    borderBottomRightRadius: 0,
  },
});

export default OtherPodcast;
