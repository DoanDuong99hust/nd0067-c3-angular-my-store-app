import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart: Map<number, number> = new Map<number, number>();

    constructor() {
      // get cart data from localStorage         
      this.refreshCart()
    }
    public  refreshCart(){
      const storedCart = localStorage.getItem(this.getCartKey());
      if (storedCart) {
        this.cart = new Map(JSON.parse(storedCart));      
      } else {
        this.cart = new Map<number, number>();
      }
    }
    private getCartKey():string {     
        return 'cart';
    }
  
    addToCart(productId: number, quantity: number = 1): void {
      if (this.cart.has(productId)) {
        this.cart.set(productId, this.cart.get(productId)! + quantity);
      } else {
        this.cart.set(productId, quantity);
      }
      this.saveCartToLocalStorage();
    }
    
    getCart(): Map<number, number> {
      return this.cart;
    }

    private saveCartToLocalStorage(): void {
      localStorage.setItem(this.getCartKey(), JSON.stringify(Array.from(this.cart.entries())));
    }  

    clearCart(): void {
      this.cart.clear();
    }

    removeItemFromCart(id: number): void {
        this.cart.delete(id);
        this.saveCartToLocalStorage();
    }
}