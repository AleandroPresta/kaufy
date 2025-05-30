import {
    query,
    style,
    trigger,
    transition,
    animate,
    group,
} from '@angular/animations';

const ENTER_START_STYLE = style({
    opacity: 1,
    transform: 'translateX(100%)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
});

const ENTER_ANIMATION = animate(
    '0.7s ease',
    style({ opacity: 1, transform: 'translateX(0%)' })
);

// This animation trigger is used for route transitions with loading step
export const routeTransition = trigger('routeTransition', [
    // Apply this animation for any route change
    transition('* => *', [
        // Set up the container to allow absolute positioning
        style({ position: 'relative' }),
        group([
            // Animate the leaving element
            query(
                ':leave',
                [
                    style({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        width: '100%',
                    }),
                    animate(
                        '0.7s ease',
                        style({
                            opacity: 1,
                            transform: 'translateX(-100%)',
                        })
                    ),
                ],
                { optional: true }
            ),

            //  Animate the entering element
            query(':enter', [ENTER_START_STYLE, ENTER_ANIMATION], {
                optional: true,
            }),
        ]),
    ]),
]);
