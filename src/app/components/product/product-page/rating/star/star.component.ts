import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    imports: [],
    templateUrl: './star.component.html',
    styleUrl: './star.component.css',
})
export class StarComponent {
    @Input() filled: boolean = false; // Indicates if the star is filled or not
}
