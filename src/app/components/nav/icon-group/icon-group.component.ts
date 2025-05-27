import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarComponent } from '../../search-bar/search-bar.component';

@Component({
    selector: 'app-icon-group',
    imports: [SearchBarComponent],
    templateUrl: './icon-group.component.html',
    styleUrl: './icon-group.component.css',
})
export class IconGroupComponent {
    @Output() searchQuery: EventEmitter<string | undefined> = new EventEmitter<
        string | undefined
    >();
    @Output() invalidQuery: EventEmitter<void> = new EventEmitter<void>();
    searchTerm: string = '';

    onSearchQuery(): void {
        this.searchQuery.emit(this.searchTerm);
    }

    onInvalidQuery(): void {
        this.invalidQuery.emit();
    }
}
