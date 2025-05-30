import { Component } from '@angular/core';
import {
    ActivatedRoute,
    RouterOutlet,
    NavigationStart,
    Router,
} from '@angular/router';
import { routeTransition } from '../route-transition';
import { loadingFade, LOADING_TIME } from '../loading-transition';
import { OverlayComponent } from './components/overlay/overlay.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, OverlayComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [routeTransition, loadingFade],
})
export class AppComponent {
    title: string = 'kaufy';
    showLoading: boolean = false;
    loadingTime: number = LOADING_TIME;

    constructor(
        protected route: ActivatedRoute,
        private router: Router
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.showLoading = true;
                setTimeout(() => {
                    this.showLoading = false;
                }, this.loadingTime);
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
