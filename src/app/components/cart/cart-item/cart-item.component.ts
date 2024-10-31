import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../product-list/model/product.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input('item') product!: ProductModel;
  @Output('handleQuantityValue') handleQuantity = new EventEmitter();

  handleQuantityValue(quantity: number) {
    this.product.quantity = quantity;
    this.handleQuantity.emit(this.product);
  }
}
