import { Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'shop', component: ShopComponent, data: { prerender: false } },
    {
        path: 'shop/:documentId',
        component: ProductPageComponent,
        data: { renderMode: 'client' },
    },
    { path: 'profile', component: ProfileComponent },
    { path: 'cart', component: CartComponent },

    // Fallback route
    { path: '**', redirectTo: '/shop' },
];
