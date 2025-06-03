import { Component } from '@angular/core';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
    selector: 'spartan-spinner',
    standalone: true,
    imports: [HlmSpinnerComponent],
    templateUrl: './spartan-spinner.component.html',
})
export class SpartanSpinnerComponent {}
