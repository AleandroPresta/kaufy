import { Component, Input, OnInit } from '@angular/core';
import { StarComponent } from './star/star.component';

@Component({
    selector: 'app-rating',
    imports: [StarComponent],
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css',
})
export class RatingComponent implements OnInit {
    @Input() rating?: number = 0;
    @Input() starCount: number[] = [0, 0, 0, 0, 0];

    ngOnInit() {
        const filledStars = Math.floor(this.rating ? this.rating : 0);
        this.starCount = this.starCount.map((_, index) =>
            index < filledStars ? 1 : 0
        );
        console.log('Star count:', this.starCount);
    }
}
