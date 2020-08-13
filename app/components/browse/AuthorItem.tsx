import React, { Dispatch } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { Author } from '../../types';
import { Colors, Fonts } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { AppActions } from '../../store';
import { useDispatch } from 'react-redux';

const AuthorItem: React.FC<{ author: Author }> = ({
  author: { id, image, color, name, podcasts },
}) => {
  const navigation = useNavigation();
  const dispatch: Dispatch<AppActions['pcast']> = useDispatch();

  return (
    <TouchableHighlight
      onPress={() => {
        dispatch({ type: 'ACTIVE_AUTHOR', payload: id });
        navigation.navigate('AuthorDetails');
      }}
      style={{
        borderRadius: 24,
        borderBottomRightRadius: 0,
        backgroundColor: Colors[color],
        height: 100,
        position: 'relative',
        marginBottom: 50,
        padding: 16,
        paddingLeft: 117 + 50,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 16,
          }}>
          <Image source={image} style={{ width: 117, height: 158 }} />
        </View>
        <View>
          <Text style={[Fonts.medium, { fontSize: 18, marginBottom: 8 }]}>
            {name}
          </Text>
          <Text style={[Fonts.regular, { fontSize: 13 }]}>
            Podcasts: {podcasts}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

export default AuthorItem;
