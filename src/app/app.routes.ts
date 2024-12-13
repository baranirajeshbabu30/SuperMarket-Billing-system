import { Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: 'products', component: ProductComponent },
      { path: 'products/:categoryId', component: ProductComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
  { path: 'invoice', component: InvoiceComponent },
  { path: '**', redirectTo: '' },
];

