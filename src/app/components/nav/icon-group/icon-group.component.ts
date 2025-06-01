import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { OverlayService } from '../../../services/overlay.service';

@Component({
    selector: 'app-icon-group',
    imports: [SearchBarComponent, RouterModule],
    templateUrl: './icon-group.component.html',
    styleUrl: './icon-group.component.css',
})
export class IconGroupComponent {
    constructor(private overlayService: OverlayService) {}

    @Output() searchQuery: EventEmitter<string | undefined> = new EventEmitter<
        string | undefined
    >();
    @Output() invalidQuery: EventEmitter<void> = new EventEmitter<void>();
    searchTerm: string = '';

    onSearchQuery(event: any): void {
        this.searchQuery.emit(event);
    }

    onInvalidQuery(): void {
        this.invalidQuery.emit();
    }

    goToProfile() {
        this.overlayService.transitionTo('/profile');
    }
}
