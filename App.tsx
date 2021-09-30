import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import {Home} from './src/pages/Home';
import {Header} from './src/pages/Header/Header';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerTransparent: false,
          headerShadowVisible: false,
          headerTintColor: '#20252a',

          headerRight: () => <Header />,
        })}>
        <Stack.Screen
          name="Produtos disponíveis"
          component={Home}
          options={() => ({})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
