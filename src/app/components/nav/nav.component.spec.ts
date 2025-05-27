import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavComponent } from './nav.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { IconGroupComponent } from './icon-group/icon-group.component';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Direct SearchBar Events', () => {
        it('should emit invalidQuery when search-bar triggers invalid query', () => {
            // Arrange
            spyOn(component.invalidQuery, 'emit');
            const searchBarComponent = fixture.debugElement.query(
                By.directive(SearchBarComponent)
            ).componentInstance;

            // Act
            searchBarComponent.invalidQuery.emit();

            // Assert
            expect(component.invalidQuery.emit).toHaveBeenCalled();
        });

        it('should emit searchQuery when search-bar triggers valid query', () => {
            // Arrange
            const testQuery = 'test search query';
            spyOn(component.searchQuery, 'emit');
            const searchBarComponent = fixture.debugElement.query(
                By.directive(SearchBarComponent)
            ).componentInstance;

            // Act
            searchBarComponent.searchQuery.emit(testQuery);

            // Assert
            expect(component.searchQuery.emit).toHaveBeenCalledWith(testQuery);
        });
    });

    describe('Icon Group SearchBar Events', () => {
        it('should emit invalidQuery when icon-group search-bar triggers invalid query', () => {
            // Arrange
            spyOn(component.invalidQuery, 'emit');
            const iconGroupComponent = fixture.debugElement.query(
                By.directive(IconGroupComponent)
            ).componentInstance;

            // Act
            iconGroupComponent.invalidQuery.emit();

            // Assert
            expect(component.invalidQuery.emit).toHaveBeenCalled();
        });

        it('should emit searchQuery when icon-group search-bar triggers valid query', () => {
            // Arrange
            const testQuery = 'icon group search query';
            spyOn(component.searchQuery, 'emit');
            const iconGroupComponent = fixture.debugElement.query(
                By.directive(IconGroupComponent)
            ).componentInstance;

            // Act
            iconGroupComponent.searchQuery.emit(testQuery);

            // Assert
            expect(component.searchQuery.emit).toHaveBeenCalledWith(testQuery);
        });
    });

    describe('Event Handler Methods', () => {
        it('should call onSearchQuery method when receiving search query', () => {
            // Arrange
            const testQuery = 'method test query';
            spyOn(component, 'onSearchQuery').and.callThrough();
            spyOn(component.searchQuery, 'emit');

            // Act
            component.onSearchQuery(testQuery);

            // Assert
            expect(component.onSearchQuery).toHaveBeenCalledWith(testQuery);
            expect(component.searchQuery.emit).toHaveBeenCalledWith(testQuery);
        });

        it('should call onInvalidQuery method when receiving invalid query', () => {
            // Arrange
            spyOn(component, 'onInvalidQuery').and.callThrough();
            spyOn(component.invalidQuery, 'emit');

            // Act
            component.onInvalidQuery();

            // Assert
            expect(component.onInvalidQuery).toHaveBeenCalled();
            expect(component.invalidQuery.emit).toHaveBeenCalled();
        });
    });
});
