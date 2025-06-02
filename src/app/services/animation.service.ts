import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AnimationService {
    /**
     * Gets the global loading time duration from env variable
     */
    get loadingTimeDuration(): number {
        const envValue = import.meta.env['NG_APP_LOADING_TIME'];
        const duration = envValue ? parseInt(envValue, 10) : 1000; // Default to 1000ms if not set
        return duration;
    }

    /**
     * Gets the loading time as seconds for CSS animations
     */
    get loadingTimeSeconds(): string {
        return `${this.loadingTimeDuration / 1000}s`;
    }

    /**
     * Gets a proportional value of the loading time
     * @param proportion The proportion of the loading time (e.g., 0.6 for 60%)
     * @returns Number in milliseconds
     */
    getProportionalTime(proportion: number): number {
        return this.loadingTimeDuration * proportion;
    }

    /**
     * Gets a proportional value of the loading time in seconds
     * @param proportion The proportion of the loading time (e.g., 0.6 for 60%)
     * @returns String with seconds unit (e.g., "0.6s")
     */
    getProportionalTimeSeconds(proportion: number): string {
        return `${(this.loadingTimeDuration * proportion) / 1000}s`;
    }

    /**
     * Sets global CSS animation variables based on loading time
     * @param element The element to set variables on (usually document.documentElement)
     * @param options Optional configuration for animation timing
     */
    setCSSAnimationVariables(
        element: HTMLElement,
        options: {
            mainDurationFactor?: number; // Factor for main animation duration
            maxDuration?: number; // Maximum duration in seconds
            delay1Factor?: number; // Factor for first delay
            delay2Factor?: number; // Factor for second delay
            delay3Factor?: number; // Factor for third delay
            progressFactor?: number; // Factor for progress animation
        } = {}
    ): void {
        const {
            mainDurationFactor = 0.8,
            maxDuration = 1.5,
            delay1Factor = 0,
            delay2Factor = 0.25,
            delay3Factor = 0.5,
            progressFactor = 3,
        } = options;

        const durationSeconds = this.loadingTimeDuration / 1000;
        const animationDuration = Math.min(
            durationSeconds * mainDurationFactor,
            maxDuration
        );

        // Set CSS variables
        element.style.setProperty(
            '--animation-duration',
            `${animationDuration}s`
        );
        element.style.setProperty(
            '--animation-delay-1',
            `${animationDuration * delay1Factor}s`
        );
        element.style.setProperty(
            '--animation-delay-2',
            `${animationDuration * delay2Factor}s`
        );
        element.style.setProperty(
            '--animation-delay-3',
            `${animationDuration * delay3Factor}s`
        );

        // For progress animation, ensure it's appropriately scaled to the loading time
        // Calculate progress duration based on loading time directly
        const progressDuration = Math.min(
            (this.loadingTimeDuration / 1000) * progressFactor,
            6
        );
        element.style.setProperty(
            '--progress-animation-duration',
            `${progressDuration}s`
        );
    }
}
