import {
    query,
    style,
    trigger,
    transition,
    animate,
    sequence,
} from '@angular/animations';

// This animation trigger is used for route transitions with loading step
export const routeTransition = trigger('routeTransition', [
    // Apply this animation for any route change
    transition('* => *', [
        // Set up the container to allow absolute positioning
        style({ position: 'relative' }),

        // 1. Set initial styles for both elements
        query(
            ':enter, :leave',
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
            }),
            { optional: true }
        ),

        // 2. Set specific initial styles for entering element (completely hidden)
        query(
            ':enter',
            style({
                opacity: 0,
                transform: 'translateX(100%)',
            }),
            { optional: true }
        ),

        // 3. Three-phase animation sequence
        sequence([
            // Phase 1: Slide out the current page quickly
            query(
                ':leave',
                [
                    animate(
                        '250ms ease-in',
                        style({
                            opacity: 0,
                            transform: 'translateX(-50%)',
                        })
                    ),
                ],
                { optional: true }
            ),

            // Phase 2: Brief loading pause (loading component shows during this time)
            // The loading service handles showing/hiding the loading component
            query(
                ':enter',
                style({
                    opacity: 0,
                    transform: 'translateX(100%)',
                }),
                { optional: true }
            ),

            // Phase 3: Slide in the new page smoothly
            query(
                ':enter',
                [
                    animate(
                        '350ms ease-out',
                        style({
                            opacity: 1,
                            transform: 'translateX(0)',
                        })
                    ),
                ],
                { optional: true }
            ),
        ]),
    ]),
]);
