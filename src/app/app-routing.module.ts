import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponents } from './modules/module-a/view-components';
import { ViewHome } from './modules/module-a/view-home';
import { ViewForm } from './modules/module-b/view-form';

const routes: Routes = [
    { path: '', component: ViewHome },
    { path: 'home', component: ViewHome },
    { path: 'components', component: ViewComponents },
    { path: 'form', component: ViewForm }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
