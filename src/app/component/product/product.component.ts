import { Component, OnInit } from '@angular/core';
import { Cart, Product, PRODUCTS } from '../../service/mock-product-data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CATEGORIES, Category } from '../../service/mock-data';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  categories: Category[] = CATEGORIES;
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = [];
  cart: Cart[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const categoryId = +params.get('categoryId')!;
      if (categoryId === 1 || isNaN(categoryId)) {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(
          (product) => product.categoryId === categoryId
        );
      }
    });

    this.cart = this.productService.getCartProducts();
  }

  getCategoryImage(categoryId: number): string {
    const category = this.categories.find((cat) => cat.id === categoryId);
    return category ? category.image : 'assets/images/supermarket.jpg';
  }

  addToCart(product: Product): void {
    const cartItem: Cart = {
      cartId: product.productId,
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      categoryId: product.categoryId,
      count: 1,
    };

    this.productService.addCartProduct(cartItem);
    this.updateCart();
  }

  incrementCount(cartId: number): void {
    const cartItem = this.cart.find((item) => item.cartId === cartId);
    if (cartItem) {
      cartItem.count = (cartItem.count || 1) + 1;
      this.productService.addCartProduct(cartItem);
      this.updateCart();
    }
  }

  decrementCount(cartId: number): void {
    const cartItem = this.cart.find((item) => item.cartId === cartId);
    if (cartItem && cartItem.count! > 1) {
      cartItem.count = cartItem.count! - 1;
      this.productService.addCartProduct(cartItem);
    } else {
      this.productService.removeCartProduct(cartId); 
    }
    this.updateCart();
  }

  updateCart(): void {
    this.cart = this.productService.getCartProducts();
  }

  getCartCount(productId: number): number {
    const cartItem = this.cart.find((item) => item.cartId === productId);
    return cartItem?.count || 0;
  }

  isInCart(productId: number): boolean {
    return this.cart.some((item) => item.cartId === productId);
  }
}
