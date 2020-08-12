import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Image } from 'react-native';
import { Podcast } from '../../types';
import { Colors, Fonts, GlobalStyles } from '../../utils';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

interface Props {
  podcast: Podcast;
  margin?: number;
  newBadge?: boolean;
  width?: boolean;
}

const FullPodcast: React.FC<Props> = ({
  podcast,
  margin = 30,
  newBadge = true,
  width = true,
}) => {
  return (
    <View style={{ height: 190, paddingTop: 10 }}>
      <ImageBackground
        source={podcast.image}
        style={[
          styles.container,
          { marginRight: margin },
          width ? { width: 309 } : null,
          newBadge ? null : { overflow: 'hidden' },
        ]}>
        <View style={[styles.container, styles.containerView]}>
          {newBadge && podcast.isNew ? (
            <View style={styles.new}>
              <Text style={[Fonts.bold, { fontSize: 12 }]}>NEW</Text>
            </View>
          ) : null}
          <Text style={[Fonts.medium, { fontSize: 24, marginBottom: 20 }]}>
            {podcast.name}
          </Text>
          <View
            style={[
              GlobalStyles.flexRowCenter,
              { justifyContent: 'space-between' },
            ]}>
            <View>
              <View style={[GlobalStyles.flexRowCenter, { marginBottom: 5 }]}>
                <Text
                  style={[Fonts.regular, { fontSize: 13, color: Colors.gray }]}>
                  {podcast.date}
                </Text>
                <View style={{ marginHorizontal: 8 }}>
                  <AntDesignIcon
                    name="clockcircleo"
                    size={13}
                    color={Colors.gray}
                  />
                </View>
                <Text
                  style={[Fonts.regular, { fontSize: 13, color: Colors.gray }]}>
                  {podcast.length.join(':')}
                </Text>
              </View>
              <View style={GlobalStyles.flexRowCenter}>
                <Image
                  source={podcast.author.image}
                  style={{ height: 16, width: 16, marginRight: 8 }}
                />
                <Text style={[Fonts.regular, { fontSize: 13 }]}>
                  {podcast.author.name}
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: Colors.red,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 25,
                }}>
                <IonIcons name="play-outline" size={25} color={Colors.white} />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 24,
    borderBottomRightRadius: 0,
  },
  containerView: {
    backgroundColor: Colors.overlay,
    padding: 25,
    position: 'relative',
  },
  new: {
    height: 23,
    width: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
    borderRadius: 12,
    position: 'absolute',
    left: 24,
    top: -10,
  },
});

export default FullPodcast;
