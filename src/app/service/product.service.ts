import { Injectable } from '@angular/core';
import { CATEGORIES } from './mock-data';
import { Cart, PRODUCTS } from './mock-product-data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly localStorageKey = 'cart';

  constructor() {}


  getCategories() {
    return CATEGORIES;
  }

  getProducts() {
    return PRODUCTS;
  }

  addCartProduct(product: Cart): void {
    if (this.isLocalStorageAvailable()) {
      const cart = this.getCartProducts();
      const existingProduct = cart.find((item: Cart) => item.cartId === product.cartId);
  
      if (existingProduct) {
        existingProduct.count = (existingProduct.count || 1) + 1;
      } else {
        cart.push({ ...product, count: 1 });
      }
  
      this.updateCartInLocalStorage(cart);
      window.location.reload();
    } else {
      console.error('localStorage is not available.');
    }
  }
  
  decrementCartProduct(product: Cart): void {
    if (this.isLocalStorageAvailable()) {
      const cart = this.getCartProducts();
      const existingProductIndex = cart.findIndex((item: Cart) => item.cartId === product.cartId);
  
      if (existingProductIndex !== -1) {
        const existingProduct = cart[existingProductIndex];
  
        if (existingProduct.count && existingProduct.count > 1) {
          existingProduct.count -= 1;
        } else {
          cart.splice(existingProductIndex, 1);
        }
  
        this.updateCartInLocalStorage(cart);
        window.location.reload();
      }
    } else {
      console.error('localStorage is not available.');
    }
  }
  
  removeCartProduct(cartId: number): void {
    if (this.isLocalStorageAvailable()) {
      const cart = this.getCartProducts();
      const updatedCart = cart.filter((product: Cart) => product.cartId !== cartId);
      this.updateCartInLocalStorage(updatedCart);
    } else {
      console.error('localStorage is not available.');
    }
  }
  
  createCartProduct(product: Cart): void {
    if (this.isLocalStorageAvailable()) {
      const cart = this.getCartProducts();
      cart.push({ ...product, count: 1 });
      this.updateCartInLocalStorage(cart);
    } else {
      console.error('localStorage is not available.');
    }
  }
  
  private updateCartInLocalStorage(cart: Cart[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(cart));
    }
  }
  
  getCartProducts(): Cart[] {
    if (this.isLocalStorageAvailable()) {
      const cartData = localStorage.getItem(this.localStorageKey);
      return cartData ? JSON.parse(cartData) : [];
    }
    return [];
  }
  
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch {
      return false;
    }
  }
}
