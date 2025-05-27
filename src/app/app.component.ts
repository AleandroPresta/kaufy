import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SonnerPreviewComponent } from './components/spartan-sonner/spartan-sonner.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavComponent, SonnerPreviewComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'kaufy';
}
