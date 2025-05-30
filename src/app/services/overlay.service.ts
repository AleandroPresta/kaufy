import {
    animate,
    AnimationBuilder,
    AnimationFactory,
    style,
} from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class OverlayService {
    private overlayElement: HTMLElement | null = null;

    constructor(
        private builder: AnimationBuilder,
        private router: Router
    ) {}

    transitionTo(targetRoute: string): void {
        this.createOverlay();

        const factory: AnimationFactory = this.builder.build([
            style({ transform: 'translateX(-100%)' }),
            animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
        ]);

        const player = factory.create(this.overlayElement!);
        player.onDone(() => {
            this.router.navigateByUrl(targetRoute).then(() => {
                // Optional: animate exit
                const exitFactory = this.builder.build([
                    animate(
                        '300ms ease-in-out',
                        style({ transform: 'translateX(100%)' })
                    ),
                ]);
                const exitPlayer = exitFactory.create(this.overlayElement!);
                exitPlayer.onDone(() => this.removeOverlay());
                exitPlayer.play();
            });
        });

        player.play();
    }

    private createOverlay() {
        this.overlayElement = document.createElement('div');
        this.overlayElement.classList.add('route-overlay');
        document.body.appendChild(this.overlayElement);
    }

    private removeOverlay() {
        if (this.overlayElement) {
            this.overlayElement.remove();
            this.overlayElement = null;
        }
    }
}
