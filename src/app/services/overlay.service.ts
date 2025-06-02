import {
    animate,
    AnimationBuilder,
    AnimationFactory,
    style,
} from '@angular/animations';
import {
    ApplicationRef,
    ComponentRef,
    createComponent,
    EnvironmentInjector,
    inject,
    Injectable,
} from '@angular/core';
import { Router } from '@angular/router';
import { OverlayComponent } from '../components/overlay/overlay.component';
import { AnimationService } from './animation.service';

@Injectable({
    providedIn: 'root',
})
export class OverlayService {
    private overlayRef!: ComponentRef<OverlayComponent>;

    private appRef = inject(ApplicationRef);
    private injector = inject(EnvironmentInjector);

    constructor(
        private builder: AnimationBuilder,
        private router: Router,
        private animationService: AnimationService
    ) {}

    transitionTo(targetRoute: string): void {
        // Create overlay before showing it
        this.createOverlay();

        // Set initial style before adding to DOM
        const element = this.getElement();
        element.style.opacity = '0';
        element.style.transform = 'translateX(-100%)';

        // Give a small delay to ensure component is mounted properly
        // This helps prevent flashing by ensuring the initial state is properly set
        const initDelay = this.animationService.getProportionalTime(0.02); // Tiny delay
        setTimeout(() => {
            // Step 1: Fade in and slide overlay from left
            const enterDuration =
                this.animationService.getProportionalTime(0.6);
            const enterFactory: AnimationFactory = this.builder.build([
                style({ opacity: 0, transform: 'translateX(-100%)' }),
                animate(
                    `${enterDuration}ms ease-out`,
                    style({ opacity: 1, transform: 'translateX(0)' })
                ),
            ]);

            const enterPlayer = enterFactory.create(element);
            enterPlayer.onDone(() => {
                // Wait a moment while overlay is visible before navigating
                const waitBeforeNavigateDelay =
                    this.animationService.getProportionalTime(0.2);
                setTimeout(() => {
                    // Step 2: Navigate to the target route
                    this.router.navigateByUrl(targetRoute).then(() => {
                        // Step 3: After navigation completes, animate overlay away
                        const waitBeforeExitDelay =
                            this.animationService.getProportionalTime(0.1);
                        setTimeout(() => {
                            const exitDuration =
                                this.animationService.getProportionalTime(0.6);
                            const exitFactory = this.builder.build([
                                style({
                                    opacity: 1,
                                    transform: 'translateX(0)',
                                }),
                                animate(
                                    `${exitDuration}ms ease-in`,
                                    style({
                                        opacity: 0,
                                        transform: 'translateX(100%)',
                                    })
                                ),
                            ]);

                            const exitPlayer = exitFactory.create(element);
                            exitPlayer.onDone(() => this.removeOverlay());
                            exitPlayer.play();
                        }, waitBeforeExitDelay);
                    });
                }, waitBeforeNavigateDelay); // Proportional delay for visual effect
            });

            enterPlayer.play();
        }, 10); // Short delay to ensure DOM is ready
    }

    private createOverlay() {
        this.overlayRef = createComponent(OverlayComponent, {
            environmentInjector: this.injector,
        });
        this.appRef.attachView(this.overlayRef.hostView);
        document.body.appendChild(this.getElement());
    }

    private removeOverlay() {
        this.appRef.detachView(this.overlayRef.hostView);
        this.overlayRef.destroy();
    }

    private getElement(): HTMLElement {
        return this.overlayRef.location.nativeElement;
    }
}
