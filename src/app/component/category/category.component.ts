import { Component } from '@angular/core';
import { CATEGORIES } from '../../service/mock-data';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-category',
  imports: [MatListModule,CommonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categories = CATEGORIES;
}
