import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    apiUrl = import.meta.env['NG_APP_API_URL'];

    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
    }
}
