import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import { AppComponent }             from './app.component';
import {AppRoutingModule}           from './app-routing.module';
import {Globals }                   from './globals';
import {LoginService}               from './login/login.service';
import {LoginComponent}             from './login/login.component';
import {LogoutComponent}            from './logout/logout.component';
import {LogoutService}              from './logout/logout.service';
import {AdminModule}                from './admin/admin.module';
import {TesterModule}               from './tester/tester.module';
import {RemoteIpDetailComponent}    from './remote-ip/remote-ip-details.component';
import {RemoteIpComponent}          from './remote-ip/remote-ip.component';
import {RemoteIpFormComponent}      from './remote-ip/remote-ip-form.component';
import {QueueRuleComponent}         from './queue-rule/queue-rule.component';
import {QueueRuleDetailsComponent}  from './queue-rule/queue-rule-details.component';
import {QueueRuleFormComponent}     from './queue-rule/queue-rule-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AdminModule,
        TesterModule,
        AppRoutingModule
  ],
    declarations: [
        AppComponent,
        RemoteIpDetailComponent,
        RemoteIpComponent,
        RemoteIpFormComponent,
        QueueRuleComponent,
        QueueRuleDetailsComponent,
        QueueRuleFormComponent,
        LoginComponent,
        LogoutComponent
  ],
    providers: [
        Globals,
        LoginService,
        LogoutService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
