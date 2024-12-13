import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OutletComponent } from '../outlet/outlet.component';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,MatIconModule,OutletComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router:Router){}
  onClick() {
   

    this.router.navigate(['/products/1']);
  }
}
