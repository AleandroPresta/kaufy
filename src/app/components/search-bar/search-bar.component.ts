import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    imports: [],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
    @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

    search(): void {
        const query = (
            document.getElementById('searchInput') as HTMLInputElement
        ).value;
        if (query) {
            console.log('Search query:', query);
            this.searchQuery.emit(query);
            // Clear the input field after emitting the event
            (document.getElementById('searchInput') as HTMLInputElement).value =
                '';
        } else {
            this.invalidQuery();
        }
    }

    invalidQuery(): void {
        console.log('Invalid search query');
    }
}
