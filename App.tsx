import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {StyleProvider} from 'react-native-zephyr';

import ProductList from './src/screens/ProductsList';
import ProductDetails from './src/screens/ProductDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import configureStore from './src/store';

const App = () => {
  const store = configureStore();

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <StyleProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </StyleProvider>
    </Provider>
  );
};

export default App;
