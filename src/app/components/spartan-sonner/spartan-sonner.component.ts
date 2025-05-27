import { Component } from '@angular/core';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { toast } from 'ngx-sonner';

@Component({
    selector: 'spartan-sonner-error',
    imports: [HlmToasterComponent],
    templateUrl: './spartan-sonner.component.html',
})
export class SpartanSonnerComponent {
    showToast() {
        toast.error('Error', {
            description: 'Please enter a valid search query.',
            duration: 3000, // 3s
            action: {
                label: 'Dismiss',
                onClick: () => {
                    toast.dismiss();
                },
            },
        });
    }
}
