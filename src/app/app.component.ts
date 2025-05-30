import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

    constructor() {}
}
