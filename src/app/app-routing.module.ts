import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import(/* webpackChunkName: "module_a" */ './modules/module-a/view-home').then((m) => m.ViewHome)
    },
    {
        path: 'components',
        loadComponent: () => import(/* webpackChunkName: "module_a" */ './modules/module-a/view-components').then((m) => m.ViewComponents)
    },
    {
        path: 'form',
        loadComponent: () => import(/* webpackChunkName: "module_b" */ './modules/module-b/view-form').then((m) => m.ViewForm)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
