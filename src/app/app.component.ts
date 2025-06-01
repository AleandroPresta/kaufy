import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransition } from '../route-transition';
import { OverlayComponent } from './components/overlay/overlay.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, OverlayComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [],
})
export class AppComponent {
    title: string = 'kaufy';
    showLoading: boolean = false;
}
