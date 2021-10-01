import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {CartProvider, useCart} from './useCart';

describe('Cart Hook', () => {
  describe('addProduct()', () => {
    it('should increase product  quantity in cart if the  product quantity is lesser than the product available quantity', () => {
      const {result} = renderHook(() => useCart(), {wrapper: CartProvider});

      const product = {
        id: 1,
        image: 'image',
        name: 'name',
        description: 'description',
        price: 21,
        quantity: 5,
      };

      act(() => result.current.addProduct(product));

      act(() => result.current.addProduct(product));

      expect(result.current.cart).toEqual([
        expect.objectContaining({product: product, quantity: 2}),
      ]);
    });
    it('should exit the function when the quantity is greater than the quantity of products available ', () => {
      const {result} = renderHook(() => useCart(), {wrapper: CartProvider});
      const product = {
        id: 1,
        image: 'image',
        name: 'name',
        description: 'description',
        price: 21,
        quantity: 1,
      };

      act(() => result.current.addProduct(product));

      act(() => result.current.addProduct(product));

      expect(result.current.cart).toEqual([
        expect.objectContaining({product: product, quantity: 1}),
      ]);
    });
  });

  describe('addProductByUserInput()', () => {
    it('should add a specific quantity of the product to the cart when the product is not in the cart', () => {
      const {result} = renderHook(() => useCart(), {wrapper: CartProvider});

      const product = {
        id: 1,
        image: 'image',
        name: 'name',
        description: 'description',
        price: 21,
        quantity: 2,
      };

      act(() => result.current.addProductByUserInput(product, 2));

      expect(result.current.cart).toEqual([
        expect.objectContaining({product: product, quantity: 2}),
      ]);
    });
    it('should add a specific quantity of the product to the cart when the product is in the cart', () => {
      const {result} = renderHook(() => useCart(), {wrapper: CartProvider});

      const product = {
        id: 1,
        image: 'image',
        name: 'name',
        description: 'description',
        price: 21,
        quantity: 5,
      };

      act(() => result.current.addProductByUserInput(product, 2));

      act(() => result.current.addProductByUserInput(product, 4));

      expect(result.current.cart).toEqual([
        expect.objectContaining({product: product, quantity: 4}),
      ]);
    });
  });
  describe('decreaseQuantity()', () => {
    it('should decrease the product quantity in the cart if the quantity that is already in cart is greater than one', () => {
      const {result} = renderHook(() => useCart(), {wrapper: CartProvider});

      const product = {
        id: 1,
        image: 'image',
        name: 'name',
        description: 'description',
        price: 21,
        quantity: 5,
      };

      act(() => result.current.addProductByUserInput(product, 2));

      act(() => result.current.decreaseQuantity(product.id));

      expect(result.current.cart).toEqual([
        expect.objectContaining({product: product, quantity: 1}),
      ]);
    });
    it('should remove the product from cart if the product quantity in the cart is equal one', () => {
      const {result} = renderHook(() => useCart(), {wrapper: CartProvider});

      const product = {
        id: 1,
        image: 'image',
        name: 'name',
        description: 'description',
        price: 21,
        quantity: 5,
      };

      act(() => result.current.addProductByUserInput(product, 1));

      act(() => result.current.decreaseQuantity(product.id));

      expect(result.current.cart).toEqual([]);
    });
  });
  describe('removeProduct()', () => {
    it('should remove product from cart', () => {
      const {result} = renderHook(() => useCart(), {wrapper: CartProvider});

      const product = {
        id: 1,
        image: 'image',
        name: 'name',
        description: 'description',
        price: 21,
        quantity: 5,
      };

      act(() => result.current.addProduct(product));
      act(() => result.current.removeProduct(product.id));

      expect(result.current.cart).toEqual([]);
    });
  });
});
