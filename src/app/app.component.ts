import { Component } from '@angular/core';

import { Button } from '@capitec/omni-components/button';
import { Select } from '@capitec/omni-components/select';
import '@capitec/omni-components/button';
import '@capitec/omni-components/select';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-app';

    buttonType = 'primary';
    buttonLabel = 'Click Me';

    selectValue = { id: '2', label: 'James Howlett' };

    selectItems = [
        { id: '1', label: 'Peter Parker' },
        { id: '2', label: 'James Howlett' },
        { id: '3', label: 'Tony Stark' },
        { id: '4', label: 'Steve Rodgers' },
        { id: '5', label: 'Bruce Banner' },
        { id: '6', label: 'Wanda Maximoff' },
        { id: '7', label: 'TChalla' },
        { id: '8', label: 'Henry P. McCoy' },
        { id: '9', label: 'Carl Lucas' },
        { id: '10', label: 'Frank Castle' }
    ];

    onChange(event?: Event) {
        console.log((event?.target as Select).value);
    }

    onClick(event?: Event) {
        console.log((event?.target as Button).type);
    }

    renderItem(item: any) {
        const s = document.createElement('span');
        s.innerText = `${item.label} - (${item.id})`;
        s.style.color = 'orange';
        return s;
    }
}
