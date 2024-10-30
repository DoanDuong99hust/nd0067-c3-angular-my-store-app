import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-list/product-item-detail/product-item-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: '/product-list', pathMatch: 'full'},
    {path: 'product-list', component: ProductListComponent},
    {path: 'product-list/:id', component: ProductItemDetailComponent},
    {path: 'cart', component: CartComponent}
];
