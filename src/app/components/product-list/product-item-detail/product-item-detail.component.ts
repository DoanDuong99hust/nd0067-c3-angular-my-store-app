import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.scss'
})
export class ProductItemDetailComponent implements OnInit, OnDestroy {
  product!: ProductModel;
  allProductSubcription!: Subscription;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService
  ) {}

  ngOnInit(): void {
    let contextPath = this.route.snapshot.paramMap.get('id');
    let values = contextPath?.split('/');
    let productId = 0;
    if(values !== undefined) {
      productId = +values[values.length - 1];
    }
    this.product = this.productService.findProductById(productId);

  }

  addToCart() {
    this.cartService.addToCart(this.product.id, +this.product.quantity)
    window.alert('Added to cart!')
  }

  ngOnDestroy(): void {
    
  }
}
