import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {Home} from '.';
import {useCart} from '../../hooks/useCart';
import AxiosMock from 'axios-mock-adapter';

import api from '../../services/api';

const mockedAddProduct = jest.fn();
const mockedDecreaseProductQuantity = jest.fn();
const mockedUseCartHook = useCart as jest.Mock;

const apiMock = new AxiosMock(api);
jest.mock('../../hooks/useCart');
describe('Home', () => {
  beforeAll(() => {
    apiMock.onGet('products').reply(200, [
      {
        id: 1,
        name: 'Tênis Adidas',
        quantity: 10,
        price: 220,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image: 'https://www.imagemhost.com.br/images/2021/09/30/images-1.jpg',
      },
      {
        id: 2,
        name: 'Tênis Nike',
        quantity: 2,
        price: 250,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image: 'https://www.imagemhost.com.br/images/2021/09/30/images.jpg',
      },
      {
        id: 3,
        name: 'Tênis Mizuno',
        quantity: 4,
        price: 180,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image: 'https://www.imagemhost.com.br/images/2021/09/30/904105370.jpg',
      },
      {
        id: 4,
        name: 'Tênis Vans',
        quantity: 3,
        price: 200,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image:
          'https://www.imagemhost.com.br/images/2021/09/30/Tenis-Vans-Wm-Ward-0.jpg',
      },
    ]);
  });

  it('should render list without error', () => {
    mockedUseCartHook.mockReturnValue({
      cart: [
        {
          product: {
            id: 3,
            name: 'Tênis Mizuno',
            quantity: 4,
            price: 2800,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            image:
              'https://www.imagemhost.com.br/images/2021/09/30/904105370.jpg',
          },
          quantity: 2,
        },
        {
          product: {
            id: 4,
            name: 'Tênis Vans',
            quantity: 3,
            price: 2900,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            image:
              'https://www.imagemhost.com.br/images/2021/09/30/Tenis-Vans-Wm-Ward-0.jpg',
          },
          quantity: 2,
        },
      ],
      products: [
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
      addProduct: mockedAddProduct,
      decreaseQuantity: mockedDecreaseProductQuantity,
    });
  });
});
