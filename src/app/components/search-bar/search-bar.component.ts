import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-search-bar',
    imports: [FormsModule],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
    @Output() searchQuery: EventEmitter<string | undefined> = new EventEmitter<
        string | undefined
    >();
    @Output() invalidQuery: EventEmitter<void> = new EventEmitter<void>();
    searchTerm: string = '';

    search(): void {
        if (this.isInvalid(this.searchTerm)) {
            this.invalidQuery.emit();
        } else {
            this.searchQuery.emit(this.searchTerm);
            this.searchTerm = ''; // Clear the search term after emitting
        }
    }

    isInvalid(query: string | undefined): boolean {
        return query === undefined || query.trim() === '';
    }
}
