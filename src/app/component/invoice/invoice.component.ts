import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-invoice',
  imports: [MatTableModule, MatIconModule, MatCardModule,MatButtonModule],

  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  cartItems: any[] = [];
  grandTotal: number = 0;
  paymentSuccessful: boolean = false;
  displayedColumns: string[] = ['number','name', 'quantity', 'price','total'];

constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.loadCartItems();
    this.calculateGrandTotal();
  }

  loadCartItems(): void {
    this.cartItems = this.productService.getCartProducts();
    console.log('Cart Items Loaded:', this.cartItems);
  }

  calculateGrandTotal(): void {
    this.grandTotal = this.cartItems.reduce((total, item) => total + item.price * item.count, 0);
  }

  completePayment(): void {
    this.paymentSuccessful = true; 
  }

  goBack() {
    window.history.back();  
  }
}
