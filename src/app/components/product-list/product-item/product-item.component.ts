import { Component, Input } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input('product') product!: ProductModel;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product.id, +this.product.quantity)
    window.alert('Added to cart!')
  }
}
