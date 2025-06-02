import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
    selector: 'app-overlay',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './overlay.component.html',
    styleUrl: './overlay.component.css',
})
export class OverlayComponent implements OnInit {
    constructor(private animationService: AnimationService) {}

    ngOnInit() {
        this.setAnimationDurations();
    }

    /**
     * Sets CSS variables for animations based on environment variable
     */
    private setAnimationDurations(): void {
        // Use the animation service to set consistent CSS variables
        this.animationService.setCSSAnimationVariables(
            document.documentElement,
            {
                mainDurationFactor: 0.8, // Animation duration as 80% of loading time
                maxDuration: 1.5, // Cap at 1.5s for good UX
                delay1Factor: 0, // No delay for first animation
                delay2Factor: 0.25, // 25% delay for second animation
                delay3Factor: 0.5, // 50% delay for third animation
                progressFactor: 3, // Progress animation is 3x the duration
            }
        );
    }
}
