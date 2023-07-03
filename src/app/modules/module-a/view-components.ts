import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ColorField } from '@capitec/omni-components/color-field';
import { Select } from '@capitec/omni-components/select';

import '@capitec/omni-components/color-field';
import '@capitec/omni-components/hyperlink';
import '@capitec/omni-components/icon';
import '@capitec/omni-components/label';
import '@capitec/omni-components/select';

@Component({
    selector: 'app-view-components',
    templateUrl: './view-components.html',
    styleUrls: ['./view-components.css'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewComponents {
    color: string = '#209dee';
    size: string = 'large';
    iconSizes = ['default', 'extra-small', 'small', 'medium', 'large'];

    colourChange(e: Event) {
        this.color = (e.target as ColorField)?.value?.toString() ?? '#209dee';
    }

    sizeChange(e: Event) {
        this.size = (e.target as Select)?.value?.toString() ?? 'default';
    }
}
