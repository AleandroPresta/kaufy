import { Component } from '@angular/core';
import { ProductComponent } from '../../product/product.component';
import { Product } from '../../../models/product.model';

@Component({
    selector: 'app-shop-list',
    imports: [ProductComponent],
    templateUrl: './shop-list.component.html',
    styleUrl: './shop-list.component.css',
})
export class ShopListComponent {
    productList: Product[] = [
        {
            name: 'Wireless Headphones',
            price: 199,
            image_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBubWdtPnOBX8w8X54hL1hVhBTBKU6oT__9wUH3oCylRHiXDrPpwutrL8-hp02b5zrUmpECGbW09Ok_JR-PIGl1WcT78-Do64OFFrTLx8Zqa2YxM7lY4GKD1aevcJgSvqMNkS-ygsrXcQIxzjroktjzRjCResdDjS-YizKU20825g_QGNmenVTGUCm4jW2cFofmv7R21dH6OxLkVzvi1aE_EJBMBoUDJg4GEtBBTgrNUyMXiVssY57JGLE1t9ymnv4JooeqBS0vFw',
            description:
                'Experience the freedom of wireless audio with our premium headphones. Perfect for music lovers and audiophiles alike.',
        },
        {
            name: 'Smartwatch',
            price: 249,
            image_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAlj04wGR959ZKqquoLxJKe-nAsOMvqJWifAdhQQcgZ-wdhRav75GlKggAnJdNSFYg871Vy22BopyredBkHNOuLG4ZEZVJ20sRP5hEZv2ogzuKtG-Zcmf-j8vZriCttbH7FQur3VriV2k65YWPWU2wEhRHtt8Yva9ER7q5vIYl5-FPJJtp7y8ssG0PC3hp_-U-yDlAyU38XNZOCsIqaBcUuoZpffgy5Z-aOpufIJ9Lzk1zRRY_-xih4kF6U5MST_Gwzzrgw18U7PA',
            description:
                'Experience the freedom of wireless audio with our premium headphones. Perfect for music lovers and audiophiles alike.',
        },
        {
            name: 'Portable Bluetooth Speaker',
            price: 79,
            image_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBA0dY8xMZE0hV-Rbch9LsH0_QdWga_n8YaIqFvjNaiIk6kRunIOkWyy-naF28SEG8tbr3RhHY7eyCyUTBl3hgDGo1F1-NfhcJO8aF8cz1Zo42Ue9WRFbnItNmYHu9cHWM7Fcvg5-2mQoNgKvVA1k9HNBggUwPxhmIKQpPVjCVaJSmKfiiK0LF63Bc1LIDFsqttmFvh36-PwSZ4Mnau2_qUzOoNspjGHb9bKlWQxBoyNoT-sS4qGefc8HAeyrU72Ydm24wSj8ljnQ',
            description:
                'Experience the freedom of wireless audio with our premium headphones. Perfect for music lovers and audiophiles alike.',
        },
        {
            name: 'Fitness Tracker',
            price: 129,
            image_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBSUDtFsC70XWAZEPsvA1620AsMkQtoqqs5R3nYws85tJAFGW5TwJ2npgt9q33v_KQ2_B33SeSIzjLwopB2pda7cvNygDEQBPA-zOJoLjJ9Xq69pvno-FsVQZ__lRtQ4TA4gQpSOTeEgRU5hAGOP9EYhhn7KIUX5yCG2vt68J0kzSG_OtQjDSWBis5YEydhD23IGeRMnS7Dk75SiTNsS_kBrXcZGKDmXXazbOfOc7KudAfk-VP8Om65SU2LKb0p0_ROMKkFx5LxCA',
            description:
                'Experience the freedom of wireless audio with our premium headphones. Perfect for music lovers and audiophiles alike.',
        },
        {
            name: 'Noise-Canceling Earbuds',
            price: 149,
            image_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCZqHgRjMWM0HYN1RpOokJcCrlkrYnT-0f4mqm4b-B9m5dfpkoLFlM5BW45tEHcnxUIQaGwykyx67NDA5mMkXc46u1iYJ6PD189jWOYGDjbApT1F11of6h-JL5qQhjs-_PYpdwwt47onwILJKU-6A6quL2VnxLBHnAi81mxm6VeQoH6lAa9z_HsFo4JoofIC4Z2X3OYlP6Q4L5hYq6OaEPwM3g1vbf9bV6C3ExhLz_nonodeqh66tvnXT-suUsUJBEKDgn7vqFrCA',
            description:
                'Experience the freedom of wireless audio with our premium headphones. Perfect for music lovers and audiophiles alike.',
        },
        {
            name: 'Wireless Mouse',
            price: 39,
            image_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuC-i4GZ8tuUwBZLNEXIwBdwcWqv-ykKs9aPSNWt7ahxB6o3Y2t-d32YMBLZ9X84bdr_fwmMDRk3BABiVHorVPl7RVQlUeeW-WSg1UdRAV4ph4tBpeeiVC8sJkyrZtzKVaPM0sMKF55dBJYyU1-PlNKv-J3Wu-aMX-9mUEzstjF89k1RbSk5QCjANGaCLTnzlRP7x4n5zyeYQ8gmgVT03G8u_Tl414wSOwKhornZRCNFyuQZVMI1vRKsBFPjPMmBl2grEhohDJ9jgw',
            description:
                'Experience the freedom of wireless audio with our premium headphones. Perfect for music lovers and audiophiles alike.',
        },
    ];
}
