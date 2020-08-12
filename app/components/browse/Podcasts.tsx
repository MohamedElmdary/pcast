import React from 'react';
import { View, Text } from 'react-native';
import { Fonts, Colors } from '../../utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

import FullPodcast from '../main/FullPodcast';

const Podcasts: React.FC = () => {
  const podcasts = useSelector((s: AppState) => s.pcast.podcasts);

  return (
    <View>
      <Text
        style={[
          Fonts.medium,
          { fontSize: 16, color: Colors.gray, marginBottom: 25 },
        ]}>
        Podcasts ({podcasts?.length ?? 0})
      </Text>
      <View>
        {podcasts?.map((podcast) => (
          <View style={{ marginBottom: 20 }} key={podcast.id}>
            <FullPodcast
              margin={50}
              newBadge={false}
              width={false}
              podcast={podcast}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Podcasts;
