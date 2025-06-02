import { Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'shop', component: ShopComponent, data: { animation: 'ShopPage' } },
    { path: 'shop/:slug', component: ProductPageComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        data: { animation: 'ProfilePage' },
    },
    { path: 'cart', component: CartComponent, data: { animation: 'CartPage' } },

    // Fallback route
    { path: '**', redirectTo: '/shop' },
];
