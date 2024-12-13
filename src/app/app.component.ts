import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { InvoiceComponent } from './component/invoice/invoice.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SuperMarket-billing';
}
