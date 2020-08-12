import React, { Dispatch } from 'react';
import { Modal, View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Fonts, Colors } from '../../utils';
import SearchResult from './SearchResult';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, AppActions } from '../../store';
import SearchInput from './SearchInput';

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
          <SearchInput
            onChangeText={(payload) => {
              dispatch({ type: 'SEARCH_PCAST', payload });
            }}
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
