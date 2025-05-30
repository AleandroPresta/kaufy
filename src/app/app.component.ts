import { Component } from '@angular/core';
import {
    ActivatedRoute,
    RouterOutlet,
    NavigationStart,
    NavigationEnd,
    Router,
} from '@angular/router';
import { routeTransition } from '../route-transition';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [routeTransition],
})
export class AppComponent {
    title = 'kaufy';

    constructor(
        protected route: ActivatedRoute,
        private router: Router
    ) {}

    prepareRoute(outlet: RouterOutlet) {
        return (
            outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']
        );
    }
}
