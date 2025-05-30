import {
    query,
    style,
    trigger,
    transition,
    animate,
    group,
} from '@angular/animations';

// This animation trigger is used for route transitions
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

        // 2. Set specific initial styles for entering element
        query(
            ':enter',
            style({
                opacity: 0,
                transform: 'translateX(100%)',
            }),
            { optional: true }
        ),

        // 3. Set specific initial styles for leaving element
        query(
            ':leave',
            style({
                opacity: 1,
                transform: 'translateX(0)',
            }),
            { optional: true }
        ),

        // 4. Animate both elements simultaneously
        group([
            // Animate the leaving element out
            query(
                ':leave',
                [
                    animate(
                        '300ms ease-in-out',
                        style({
                            opacity: 0,
                            transform: 'translateX(-100%)',
                        })
                    ),
                ],
                { optional: true }
            ),

            // Animate the entering element in
            query(
                ':enter',
                [
                    animate(
                        '300ms ease-in-out',
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
