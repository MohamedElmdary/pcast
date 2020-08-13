import React from 'react';
import { View, Text } from 'react-native';
import { Fonts, Colors } from '../../utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import AuthorItem from './AuthorItem';

const Authors: React.FC = () => {
  const authors = useSelector((s: AppState) => s.pcast.tabAuthors);

  return (
    <View>
      <Text
        style={[
          Fonts.medium,
          { fontSize: 16, color: Colors.gray, marginBottom: 85 },
        ]}>
        Authors ({authors?.length ?? 0})
      </Text>
      <View style={{ paddingRight: 33 }}>
        {authors?.map((author) => (
          <AuthorItem author={author} key={author.id} />
        ))}
      </View>
    </View>
  );
};

export default Authors;
