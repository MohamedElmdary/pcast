import React, { Dispatch } from 'react';
import { Modal, View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Fonts, Colors } from '../../utils';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import SearchResult from './SearchResult';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, AppActions } from '../../store';

interface Props {
  visible: boolean;
  setVisible: (visbile: boolean) => void;
}

const SearchModal: React.FC<Props> = ({ visible, setVisible }) => {
  const dispatch: Dispatch<AppActions['pcast']> = useDispatch();

  const results = useSelector((s: AppState) => s.pcast.SearchResult);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
        dispatch({ type: 'SEARCH_PCAST', payload: '' });
      }}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            autoFocus
            placeholderTextColor={Colors.gray}
            placeholder="Search ..."
            style={[Fonts.medium, styles.searchInp]}
            onChangeText={(payload) => {
              dispatch({ type: 'SEARCH_PCAST', payload });
            }}
          />
          <FontistoIcon
            name="search"
            size={16}
            color={Colors.gray}
            style={styles.searchIcon}
          />
        </View>
        <View style={styles.resultContainer}>
          <FlatList
            data={results}
            renderItem={({ item }) => <SearchResult podcast={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(8, 23, 39, 0.9)',
    padding: 33,
  },
  searchContainer: {
    backgroundColor: Colors.lightBackground,
    padding: 16,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    position: 'relative',
  },
  searchInp: {
    backgroundColor: Colors.darkBackground,
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
    top: 33,
    right: 32,
  },
  resultContainer: {
    backgroundColor: Colors.lightBackground,
    padding: 16,
    paddingTop: 0,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    maxHeight: '70%',
  },
});

export default SearchModal;
