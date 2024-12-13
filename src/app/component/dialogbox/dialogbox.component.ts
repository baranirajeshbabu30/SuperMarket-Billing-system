import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../../service/mock-product-data';
@Component({
  selector: 'app-dialogbox',
  imports: [MatDialogModule, CommonModule, MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule, 
    FormsModule,],
  templateUrl: './dialogbox.component.html',
  styleUrl: './dialogbox.component.scss'
})
export class DialogboxComponent {
  totalAmount: number = 0;       
  amountReceived: number = 0;    
  paymentMethod: string = '';
  cartItems: Cart[] = [];    
  constructor(
    private router: Router,  
    public dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.totalAmount = data.totalAmount;
    this.paymentMethod = data.paymentMethod;
  }

  onSubmit() {
    console.log('Payment submitted:', this.amountReceived);

    this.dialogRef.close();

    this.router.navigate(['/invoice'], {
      state: {
        amountReceived: this.amountReceived,
        totalAmount: this.totalAmount,
        paymentMethod: this.paymentMethod,
        cartItems: this.cartItems
      }
    });
  }
}
