import React from 'react';
import { View, Text } from 'react-native';
import { Fonts, Colors } from '../../utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import TopicsItem from './Topic';

const Topics: React.FC = () => {
  const topics = useSelector((s: AppState) => s.pcast.topics);

  return (
    <View>
      <Text
        style={[
          Fonts.medium,
          { fontSize: 16, color: Colors.gray, marginBottom: 25 },
        ]}>
        Topics ({topics?.length ?? 0})
      </Text>
      <View style={{ paddingRight: 33 }}>
        {topics?.map((topic) => (
          <TopicsItem topic={topic} key={topic.id} />
        ))}
      </View>
    </View>
  );
};

export default Topics;
