import { Component } from '@angular/core';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
    selector: 'spartan-spinner',
    standalone: true,
    imports: [HlmSpinnerComponent],
    template: ` <hlm-spinner /> `,
})
export class SpartanSpinnerComponent {}
