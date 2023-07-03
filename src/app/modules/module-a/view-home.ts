import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import '@capitec/omni-components/hyperlink';
import '@capitec/omni-components/icon';
import '@capitec/omni-components/label';

@Component({
    selector: 'app-view-home',
    templateUrl: './view-home.html',
    styleUrls: ['./view-home.css'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewHome {}
