import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorDrawer from './routes/NavigatorDrawer';
import { StatusBar } from 'react-native';
import { Colors } from './utils';

import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(Colors.drawerContentBackground);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatorDrawer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
