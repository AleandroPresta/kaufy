import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { toast } from 'ngx-sonner';

@Component({
    selector: 'spartan-sonner',
    imports: [HlmToasterComponent, HlmButtonDirective],
    templateUrl: './spartan-sonner.component.html',
})
export class SpartanSonnerComponent {
    showToast() {
        toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
            },
        });
    }
}
