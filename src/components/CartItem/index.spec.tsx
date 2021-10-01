import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import {CartItem} from '.';
import {CartProvider, useCart} from '../../hooks/useCart';
import {mockedNavigate} from '../../../jest/setup';
import {Keyboard} from 'react-native';
import {renderHook} from '@testing-library/react-hooks';

describe('Header', () => {
  it('should render list without error', () => {
    const product = {
      id: 1,
      image: 'image',
      name: 'name',
      description: 'description',
      price: 21,
      quantity: 5,
    };

    expect(
      render(<CartItem product={product} amount={2} />, {
        wrapper: CartProvider,
      }),
    ).toBeDefined();
  });
});
