import { Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'shop', component: ShopComponent, data: { animation: 'ShopPage' } },
    { path: 'profile', component: ProfileComponent, data: { animation: 'ProfilePage' } },
    { path: 'cart', component: CartComponent, data: { animation: 'CartPage' } },

    // Fallback route
    { path: '**', redirectTo: '/shop' },
];
