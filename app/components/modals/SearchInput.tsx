import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors, Fonts } from '../../utils';

import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface Props {
  onChangeText(payload: string): void;
  background?: string;
  autoFocus?: boolean;
}

const SearchInput: React.FC<Props> = ({
  onChangeText,
  background = Colors.darkBackground,
  autoFocus = true,
}) => {
  return (
    <View style={{ position: 'relative' }}>
      <TextInput
        autoFocus={autoFocus}
        placeholderTextColor={Colors.gray}
        placeholder="Search ..."
        style={[
          Fonts.medium,
          styles.searchInp,
          { backgroundColor: background },
        ]}
        onChangeText={onChangeText}
      />
      <FontistoIcon
        name="search"
        size={16}
        color={Colors.gray}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInp: {
    borderRadius: 16,
    fontSize: 14,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 16,
    paddingRight: 36,
  },
  searchIcon: {
    position: 'absolute',
    top: 17,
    right: 32,
  },
});

export default SearchInput;
