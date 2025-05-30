import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { routeTransition } from '../route-transition';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [routeTransition],
})
export class AppComponent {
    title = 'kaufy';

    constructor(protected route: ActivatedRoute) {}
}
