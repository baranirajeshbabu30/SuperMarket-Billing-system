import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CategoryComponent } from '../../component/category/category.component';
import { ProductComponent } from '../../component/product/product.component';
import { CartComponent } from '../../component/cart/cart.component';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-outlet',
  // imports: [MatSidenavModule,CategoryComponent,ProductComponent,CartComponent,RouterOutlet],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.scss'
})
export class OutletComponent {

}
