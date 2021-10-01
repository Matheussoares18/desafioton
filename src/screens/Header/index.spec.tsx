import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Header} from '.';
import {CartProvider} from '../../hooks/useCart';
import {mockedNavigate} from '../../../jest/setup';

describe('Header', () => {
  it('should render with cart items counter', () => {
    const {getByTestId} = render(<Header />, {wrapper: CartProvider});

    const counter = getByTestId('counter');

    expect(counter.children[0]).toBeTruthy();
  });

  it('should call navigation with correct params', () => {
    const {getByTestId} = render(<Header />, {wrapper: CartProvider});

    const button = getByTestId('cart-button');

    fireEvent.press(button);

    expect(mockedNavigate).toBeCalledWith('Cart');
  });
});
