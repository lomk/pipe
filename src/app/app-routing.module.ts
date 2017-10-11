import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import {LoginComponent}             from './login/login.component';
import {LogoutComponent}            from './logout/logout.component';
import {AdminComponent}             from './admin/admin.component';
import {AdminRoutingModule}         from './admin/admin-routing.module';
import {TesterComponent}            from './tester/tester.component';
import {TesterRoutingModule}        from './tester/tester-routing.module';

const routes: Routes = [
    { path: '',                         redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',                    component: LoginComponent},
    { path: 'logout',                   component: LogoutComponent},
    { path: 'admin',                    component: AdminComponent},
    { path: 'tester',                   component: TesterComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes), AdminRoutingModule, TesterRoutingModule ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
