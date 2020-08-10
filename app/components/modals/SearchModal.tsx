import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { Fonts } from '../../utils';

interface Props {
  visible: boolean;
  setVisible: (visbile: boolean) => void;
}

const SearchModal: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View>
        <Text style={Fonts.medium}>search box</Text>
        <Button
          title="Close"
          onPress={() => {
            setVisible(false);
          }}
        />
      </View>
    </Modal>
  );
};

export default SearchModal;
