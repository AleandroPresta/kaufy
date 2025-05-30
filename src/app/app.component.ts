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
    title: string = 'kaufy';
    showLoading: boolean = false;
    loadingTime: number = import.meta.env['NG_APP_LOADING_TIME'] || 2000;

    constructor(
        protected route: ActivatedRoute,
        private router: Router
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.showLoading = true;
                setTimeout(() => {
                    this.showLoading = false;
                }, 2000);
            }
        });
    }

    prepareRoute(outlet: RouterOutlet) {
        return (
            outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']
        );
    }
}
