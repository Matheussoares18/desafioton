import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import {ProductCard} from '.';
import {CartProvider, useCart} from '../../hooks/useCart';
import {mockedNavigate} from '../../../jest/setup';
import {renderHook} from '@testing-library/react-hooks';

const mockedAddProduct = jest.fn();
const mockedDecreaseProductQuantity = jest.fn();
const mockedUseCartHook = useCart as jest.Mock;

jest.mock('../../hooks/useCart');

describe('ProductCard', () => {
  beforeEach(() => {
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
      addProduct: mockedAddProduct,
      decreaseQuantity: mockedDecreaseProductQuantity,
    });
  });

  it('should render without error', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    expect(render(<ProductCard product={product} amount={2} />)).toBeDefined();
  });
  it('should call add product function when user click on button', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    const {getByTestId} = render(<ProductCard product={product} amount={2} />);

    const button = getByTestId('add-cart-button');

    fireEvent.press(button);

    expect(mockedAddProduct).toHaveBeenCalled();
  });
  it('should call decrease product quantity when user click on button', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    const {getByTestId} = render(<ProductCard product={product} amount={2} />);

    const button = getByTestId('decrease-cart-button');

    fireEvent.press(button);

    expect(mockedDecreaseProductQuantity).toHaveBeenCalled();
  });
  it('should render product quantity when amount is undefined', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    const {getByTestId} = render(
      <ProductCard product={product} amount={undefined} />,
    );

    const quantityCounter = getByTestId('quantity-counter');

    expect(quantityCounter.children[0]).toEqual('5');
  });
});
