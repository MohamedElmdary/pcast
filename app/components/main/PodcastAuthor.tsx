import React from 'react';
import { Author } from '../../types';
import { View, Image, Text } from 'react-native';
import { Fonts, Colors } from '../../utils';

const PodcastAuthor: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <View
      style={{ display: 'flex', justifyContent: 'center', marginRight: 20 }}>
      <Image source={author.image} style={{ height: 64, width: 64 }} />
      <Text
        style={[
          Fonts.regular,
          { fontSize: 13, marginTop: 8, marginBottom: 3 },
        ]}>
        {author.name}
      </Text>
      <Text style={[Fonts.regular, { fontSize: 13, color: Colors.gray }]}>
        Podcasts: {author.podcasts}
      </Text>
    </View>
  );
};

export default PodcastAuthor;
