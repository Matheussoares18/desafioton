import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home';
import {Header} from './src/screens/Header';
import {Cart} from './src/screens/Cart';

import {CartProvider} from './src/hooks/useCart';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Header: undefined;
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerTransparent: false,
            headerShadowVisible: false,
            headerTintColor: '#20252a',

            headerRight: () => <Header />,
          })}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
