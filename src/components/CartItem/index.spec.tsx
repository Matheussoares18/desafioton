import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import {CartItem} from '.';
import {CartProvider, useCart} from '../../hooks/useCart';
import {
  EmitterSubscription,
  EventEmitter,
  KeyboardEventListener,
  KeyboardEventName,
} from 'react-native';

jest.mock('../../hooks/useCart');

const mockedAddProduct = jest.fn();
const mockedDecreaseProductQuantity = jest.fn();
const mockedUseCartHook = useCart as jest.Mock;
const mockedRemoveCart = useCart as jest.Mock;
const mockedKeyboard = jest.fn();

describe('CartItem', () => {
  beforeEach(() => {
    mockedKeyboard.mockReturnValue({
      addListener: (
        eventType: KeyboardEventName,
        listener: KeyboardEventListener,
      ): Pick<EmitterSubscription, 'remove'> => {
        const remove = jest.fn();
        return {
          remove,
        };
      },
    });
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
      removeProduct: mockedRemoveCart,
    });
  });
  it('should render list without error', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    expect(render(<CartItem product={product} amount={2} />)).toBeDefined();
  });
  it('should call correctly decrease product quantity function when user press the button', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    const {getByTestId} = render(<CartItem product={product} amount={2} />);

    const button = getByTestId('decrease-button');

    fireEvent.press(button);

    expect(mockedDecreaseProductQuantity).toHaveBeenCalled();
  });
  it('should call correctly increase product quantity function when user press the button', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    const {getByTestId} = render(<CartItem product={product} amount={2} />);

    const button = getByTestId('increase-button');

    fireEvent.press(button);

    expect(mockedAddProduct).toHaveBeenCalled();
  });
  it('should call correctly remove product of cart function when user press the button', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    const {getByTestId} = render(<CartItem product={product} amount={2} />);

    const button = getByTestId('remove-button');

    fireEvent.press(button);

    expect(mockedRemoveCart).toHaveBeenCalled();
  });
});
