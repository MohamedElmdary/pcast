import React from 'react';
import { View, Text } from 'react-native';
import { Fonts, Colors } from '../../utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import EpisodeItem from './EpisodeItem';

const Episodes: React.FC = () => {
  const episodes = useSelector((s: AppState) => s.pcast.episodes);

  return (
    <View>
      <Text
        style={[
          Fonts.medium,
          { fontSize: 16, color: Colors.gray, marginBottom: 25 },
        ]}>
        Episodes ({episodes?.length ?? 0})
      </Text>
      <View style={{ paddingRight: 33 }}>
        {episodes?.map((ep) => (
          <EpisodeItem episode={ep} key={ep.id} />
        ))}
      </View>
    </View>
  );
};

export default Episodes;
