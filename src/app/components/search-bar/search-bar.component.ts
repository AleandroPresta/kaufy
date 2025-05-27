import {
    Component,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-search-bar',
    imports: [],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
    @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

    search(): void {
        console.log('Search initiated');
    }

    notifyInvalidQuery(): void {
        console.log('Invalid search query');
    }
}
