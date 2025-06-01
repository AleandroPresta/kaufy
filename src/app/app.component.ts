import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [],
})
export class AppComponent {
    title: string = 'kaufy';
    showLoading: boolean = false;
}
