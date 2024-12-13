import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cart',
  imports: [MatTableModule, MatIconModule, MatCardModule,MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'count', 'price'];
  cartItems: any[] = [];
  grandTotal: number = 0;

  constructor(private productService: ProductService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateGrandTotal()
  }

  loadCartItems(): void {
    this.cartItems = this.productService.getCartProducts();
    console.log('Cart Items Loaded:', this.cartItems);
  }

  incrementCount(item: any): void {
    this.productService.addCartProduct(item);
    this.loadCartItems();
  }

  decrementCount(item: any): void {
    this.productService.decrementCartProduct(item);
    this.loadCartItems();
  }

  removeItem(cartId: number): void {
    this.productService.removeCartProduct(cartId);
    this.loadCartItems();
  }

  calculateGrandTotal(): void {
    this.grandTotal = this.cartItems.reduce((price, item) => price + item.count * item.price, 0);
    console.log('Grand Total Calculated:', this.grandTotal);
  }

  selectPayment(paymentMethod: string) {
    this.dialog.open(DialogboxComponent, {
      width: '400px',
      data: { totalAmount: this.grandTotal, paymentMethod },
    });
  }
}
