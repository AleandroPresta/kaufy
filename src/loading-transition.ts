import { trigger, transition, style, animate } from '@angular/animations';

export const LOADING_TIME = import.meta.env['NG_APP_LOADING_TIME'] || 2000;

export const loadingFade = trigger('loadingFade', [
    transition(':enter', [
        style({ opacity: 1, transform: 'translateX(-100%)' }),
        animate(
            `${LOADING_TIME}ms ease`,
            style({ opacity: 1, transform: 'translateX(0)' })
        ),
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
            `${LOADING_TIME}ms ease`, // Make leave animation short for quick fade out
            style({ opacity: 1, transform: 'translateX(100%)' })
        ),
    ]),
]);
