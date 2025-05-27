import { Component } from '@angular/core';
import { SearchBarComponent } from '../../search-bar/search-bar.component';

@Component({
    selector: 'app-icon-group',
    imports: [SearchBarComponent],
    templateUrl: './icon-group.component.html',
    styleUrl: './icon-group.component.css',
})
export class IconGroupComponent {}
