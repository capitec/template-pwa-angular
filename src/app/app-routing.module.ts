import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: () => import(/* webpackChunkName: "module_a" */ './modules/module-a/view-home').then((m) => m.ViewHome)
    },
    {
        path: 'components',
        title: 'Components',
        loadComponent: () => import(/* webpackChunkName: "module_a" */ './modules/module-a/view-components').then((m) => m.ViewComponents)
    },
    {
        path: 'form',
        title: 'Form',
        loadComponent: () => import(/* webpackChunkName: "module_b" */ './modules/module-b/view-form').then((m) => m.ViewForm)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
