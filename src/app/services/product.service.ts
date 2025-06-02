import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    apiUrl = import.meta.env['NG_APP_API_URL'];
    apiToken = import.meta.env['NG_APP_API_TOKEN'];

    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.apiToken}`,
        });

        return this.httpClient.get<Product[]>(`${this.apiUrl}/products`, {
            headers,
        });
    }

    getProductById(id: number): Observable<Product> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.apiToken}`,
        });

        return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`, {
            headers,
        });
    }
}
