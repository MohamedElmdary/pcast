import React from 'react';
import { View, Text } from 'react-native';
import { Fonts, Colors } from '../../utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import CategoryItem from './CategoryItem';

const Categories: React.FC = () => {
  const categories = useSelector((s: AppState) => s.pcast.categories);

  return (
    <View>
      <Text
        style={[
          Fonts.medium,
          { fontSize: 16, color: Colors.gray, marginBottom: 25 },
        ]}>
        Categories
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingRight: 33,
          paddingBottom: 30,
        }}>
        {categories?.map((cat) => (
          <CategoryItem category={cat} key={cat.name} />
        ))}
      </View>
    </View>
  );
};

export default Categories;
