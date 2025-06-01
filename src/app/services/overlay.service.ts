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

@Injectable({
    providedIn: 'root',
})
export class OverlayService {
    private loadingTime: number = import.meta.env['NG_APP_LOADING_TIME'];

    private overlayRef!: ComponentRef<OverlayComponent>;

    private appRef = inject(ApplicationRef);
    private injector = inject(EnvironmentInjector);

    constructor(
        private builder: AnimationBuilder,
        private router: Router
    ) {}

    transitionTo(targetRoute: string): void {
        this.createOverlay();

        requestAnimationFrame(() => {
            // Use setTimeout to ensure Angular processes changes before animation
            setTimeout(() => {
                const factory: AnimationFactory = this.builder.build([
                    style({ opacity: 1, transform: 'translateX(-100%)' }),
                    animate(
                        `${this.loadingTime}ms ease`,
                        style({ opacity: 1, transform: 'translateX(0)' })
                    ),
                ]);

                const player = factory.create(this.getElement());
                player.onDone(() => {
                    this.router.navigateByUrl(targetRoute).then(() => {
                        // Optional: animate exit
                        // Use setTimeout for exit animation as well
                        setTimeout(() => {
                            const exitFactory = this.builder.build([
                                style({
                                    opacity: 1,
                                    transform: 'translateX(0)',
                                }),
                                animate(
                                    `${this.loadingTime}ms ease`,
                                    style({
                                        opacity: 1,
                                        transform: 'translateX(100%)',
                                    })
                                ),
                            ]);
                            const exitPlayer = exitFactory.create(
                                this.getElement()
                            );
                            exitPlayer.onDone(() => this.removeOverlay());
                            exitPlayer.play();
                        }, 0);
                    });
                });

                player.play();
            }, 0);
        });
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
