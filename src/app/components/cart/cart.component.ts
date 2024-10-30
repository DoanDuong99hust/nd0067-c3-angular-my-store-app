import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ProductModel } from '../product-list/model/product.model';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { ConfirmationComponent } from "../confirmation/confirmation.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmationComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems!: ProductModel[];
  customerInfo!: {fullname: string, address: string, creditCartNumber: string};
  total: number = 0;
  cart: Map<number, number> = new Map();
  submitted: boolean = false;

  constructor(private cartService: CartService,
              private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartItems = []
    this.cart = this.cartService.getCart()
    let productsInCart = Array.from(this.cart.keys());

    this.productService.findProductsByIds(productsInCart).forEach(item => {
        item.quantity = this.cart.get(item.id)!
        this.cartItems.push(item)
        this.total += item.quantity * item.price;
      })
    this.customerInfo = {fullname: '', address: '', creditCartNumber: ''};

  }

  handleQuantityValue(quantity: number, id: number) {
    this.total = 0;
    this.cartItems.forEach(item => {
      if (id === item.id) {
        item.quantity = quantity
      }
      this.total += item.quantity * item.price;
    })

    if (quantity === 0) {
      this.cartService.removeItemFromCart(id);
      let newCartItems: ProductModel[] = [];
      this.cartItems.forEach(item => {
        if (item.id != id) {
          newCartItems.push(item);
        }
      })
      this.cartItems = newCartItems;
    }
  }

  submit() {
    this.submitted = true;
    this.cartService.clearCart()
    this.cartItems = [];
  }
}
