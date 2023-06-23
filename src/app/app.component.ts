import { Component } from '@angular/core';
import { Router } from '@angular/router';

import '@capitec/omni-components/hyperlink';
import '@capitec/omni-components/switch';
import '@capitec/omni-components/label';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    darkMediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;
    darkMode: boolean = this.darkMediaQuery?.matches ?? false;

    constructor(private _router: Router) {
        if (this.darkMode) {
            document.documentElement.setAttribute('dark', '');
        }
    }

    navigate(e: MouseEvent, path: string) {
        e.preventDefault();
        this._router.navigateByUrl(path);
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        if (this.darkMode) {
            document.documentElement.setAttribute('dark', '');
        } else {
            document.documentElement.removeAttribute('dark');
        }
    }
}
