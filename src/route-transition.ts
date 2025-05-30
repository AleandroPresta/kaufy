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

        // 1. Style reset for entering and leaving elements
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

        // 2. Initial style for the entering element
        query(
            ':enter',
            [
                style({
                    opacity: 1,
                    transform: 'translateX(100%)',
                }),
            ],
            { optional: true }
        ),
        // 3. Animate the leaving element
        query(
            ':leave',
            [
                animate(
                    '0.2s',
                    style({
                        opacity: 1,
                        transform: 'translateX(-100%)',
                    })
                ),
            ],
            { optional: true }
        ),

        // 4. Animate the entering element
        query(
            ':enter',
            [
                animate(
                    '0.2s',
                    style({ opacity: 1, transform: 'translateX(0%)' })
                ),
            ],
            {
                optional: true,
            }
        ),
    ]),
]);
