import {
    query,
    style,
    trigger,
    transition,
    animate,
    group,
} from '@angular/animations';

// Get loading time from environment
const getAnimationDuration = (): string => {
    const envValue = import.meta.env['NG_APP_LOADING_TIME'];
    const durationMs = envValue ? parseInt(envValue, 10) : 1000; // Default to 1000ms
    return `${durationMs / 1000}s`;
};

const ENTER_START_STYLE = style({
    opacity: 1,
    transform: 'translateX(100%)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
});

// Animation duration will be set when the animation is triggered
const ENTER_ANIMATION = () =>
    animate(
        `${getAnimationDuration()} ease`,
        style({ opacity: 1, transform: 'translateX(0%)' })
    );

const LEAVE_START_STYLE = style({
    opacity: 1,
    transform: 'translateX(0%)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
});

// Animation duration will be set when the animation is triggered
const LEAVE_ANIMATION = () =>
    animate(
        `${getAnimationDuration()} ease`,
        style({ opacity: 0, transform: 'translateX(-100%)' })
    );

// This animation trigger is used for route transitions with loading step
export const routeTransition = trigger('routeTransition', [
    // Apply this animation for any route change
    transition('* => *', [
        // Set up the container to allow absolute positioning
        style({ position: 'relative' }),
        group([
            // Animate the leaving element
            query(':leave', [LEAVE_START_STYLE, LEAVE_ANIMATION()], {
                optional: true,
            }),

            //  Animate the entering element
            query(':enter', [ENTER_START_STYLE, ENTER_ANIMATION()], {
                optional: true,
            }),
        ]),
    ]),
]);
