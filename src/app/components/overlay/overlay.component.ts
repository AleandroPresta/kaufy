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
        // Get loading time in seconds to calibrate animations properly
        const loadingTimeSeconds =
            this.animationService.loadingTimeDuration / 1000;

        // Adjust progress factor based on loading time to prevent too long animations
        // For 3000ms (3s), we want around 1-1.2s main animation duration
        // This will make the progress bar animation about 1.5x the loading time
        const progressFactor = loadingTimeSeconds > 2 ? 1.5 : 3;

        // Use the animation service to set consistent CSS variables
        this.animationService.setCSSAnimationVariables(
            document.documentElement,
            {
                mainDurationFactor: 0.6, // Animation duration as 60% of loading time (better for longer durations)
                maxDuration: 1.2, // Cap at 1.2s for good UX (previously 1.5s)
                delay1Factor: 0, // No delay for first animation
                delay2Factor: 0.25, // 25% delay for second animation
                delay3Factor: 0.5, // 50% delay for third animation
                progressFactor: progressFactor, // Dynamic factor based on loading time
            }
        );
    }
}
