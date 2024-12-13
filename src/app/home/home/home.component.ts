import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { OutletComponent } from '../../layout/outlet/outlet.component';
import { InvoiceComponent } from '../../component/invoice/invoice.component';
import { CategoryComponent } from '../../component/category/category.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductComponent } from '../../component/product/product.component';
import { CartComponent } from '../../component/cart/cart.component';

@Component({
  selector: 'app-home',
  imports: [MatSidenavModule,CategoryComponent,RouterOutlet,ProductComponent,CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
