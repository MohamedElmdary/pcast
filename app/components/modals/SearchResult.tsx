import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Podcast } from '../../types';
import { Fonts, Colors, GlobalStyles } from '../../utils';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const SearchResult: React.FC<{ podcast: Podcast }> = ({ podcast }) => {
  return (
    <View style={[GlobalStyles.flexRowCenter, styles.container]}>
      <Image source={podcast.image} style={styles.image} />
      <View>
        <Text style={[Fonts.medium, { fontSize: 14, marginBottom: 8 }]}>
          {podcast.name}
        </Text>
        <View style={GlobalStyles.flexRowCenter}>
          <AntDesignIcon
            name="clockcircleo"
            color={Colors.gray}
            size={13}
            style={{ marginRight: 8 }}
          />
          <Text style={[Fonts.regular, { fontSize: 13, color: Colors.gray }]}>
            {podcast.length.join(':')}
          </Text>
        </View>
        <Text style={[Fonts.regular, { fontSize: 13 }]}>
          {podcast.author.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  image: {
    width: 71,
    height: 65,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    marginRight: 16,
  },
});

export default SearchResult;
