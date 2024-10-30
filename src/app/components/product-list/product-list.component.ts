import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductModel } from './model/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductItemComponent,
    CommonModule,
    RouterModule,
    MatGridListModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products!: ProductModel[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.products = this.productService.getAllProducts();
  }

  ngOnDestroy(): void {
  }
}
