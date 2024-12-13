import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../service/mock-product-data';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-invoice',
  imports: [CommonModule,MatTableModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit {
  totalAmount: number = 0;
  amountReceived: number = 0;
  paymentMethod: string = '';
  cartItems: Cart[] = []; 
  displayedColumns: string[] = ['name', 'price', 'count', 'total'];
  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.amountReceived = state['amountReceived'];
      this.totalAmount = state['totalAmount'];
      this.paymentMethod = state['paymentMethod'];
      this.cartItems = state['cartItems'] || []; 
    }

    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => {
      const count = item.count || 0; 
      return total + (item.price * count);
    }, 0);
  }
}
