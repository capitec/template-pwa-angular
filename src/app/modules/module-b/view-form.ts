import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { EmailField } from '@capitec/omni-components/email-field';
import { PinField } from '@capitec/omni-components/pin-field';
import { Check } from '@capitec/omni-components/check';
import { RadioChangeEventDetail } from '@capitec/omni-components/radio';
import '@capitec/omni-components/button';
import '@capitec/omni-components/check';
import '@capitec/omni-components/email-field';
import '@capitec/omni-components/hyperlink';
import '@capitec/omni-components/icon';
import '@capitec/omni-components/label';
import '@capitec/omni-components/pin-field';
import '@capitec/omni-components/radio';

@Component({
    selector: 'app-view-form',
    templateUrl: './view-form.html',
    styleUrls: ['./view-form.css'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewForm {
    emailValue = '';
    emailErrorValue = '';

    pinValue = '';
    pinErrorValue = '';

    checkIsChecked = false;
    checkErrorValue = '';

    radioSelected = 'admin';

    emailFieldInput(e: Event) {
        this.emailValue = (e.target as EmailField).value as string;
        this.emailErrorValue = '';
    }

    pinFieldInput(e: Event) {
        this.pinValue = (e.target as PinField).value as string;
        this.pinErrorValue = '';
    }

    checkValueChange(e: Event) {
        this.checkIsChecked = (e.target as Check).checked as boolean;
        this.checkErrorValue = '';
    }

    radioChange(e: Event) {
        this.radioSelected = (e as CustomEvent<RadioChangeEventDetail>).detail?.current?.getAttribute('data-value') as string;
    }

    submitForm() {
        let isValid = true;

        if (!this.emailValue) {
            this.emailErrorValue = 'Please enter an email value';
            isValid = false;
        }

        if (!this.pinValue) {
            this.pinErrorValue = 'Please enter a pin value';
            isValid = false;
        }

        if (!this.checkIsChecked) {
            this.checkErrorValue = 'Please accept the terms';
            isValid = false;
        }

        if (isValid) {
            alert(`Your form is valid for a ${this.radioSelected}`);
        }
    }
}
