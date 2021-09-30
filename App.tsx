import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/pages/Home';
import {Header} from './src/pages/Header/Header';
import {Cart} from './src/pages/Cart';
import {createServer} from 'miragejs';
import {CartProvider} from './src/hooks/useCart';

createServer({
  routes() {
    this.get('/api/products', () => {
      return {
        products: [
          {
            id: 1,
            name: 'Tênis Adidas',
            quantity: 10,
            price: 2000,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            image:
              'https://www.imagemhost.com.br/images/2021/09/30/images-1.jpg',
          },

          {
            id: 2,
            name: 'Tênis Nike',
            quantity: 2,
            price: 2500,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            image: 'https://www.imagemhost.com.br/images/2021/09/30/images.jpg',
          },
          {
            id: 3,
            name: 'Tênis Mizuno',
            quantity: 4,
            price: 2800,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            image:
              'https://www.imagemhost.com.br/images/2021/09/30/904105370.jpg',
          },
          {
            id: 4,
            name: 'Tênis Vans',
            quantity: 3,
            price: 2900,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            image:
              'https://www.imagemhost.com.br/images/2021/09/30/Tenis-Vans-Wm-Ward-0.jpg',
          },
        ],
      };
    });
  },
});

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
