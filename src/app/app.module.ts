import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import { AppComponent }             from './app.component';
import {AppRoutingModule}           from './app-routing.module';
import {Globals }                   from './globals';
import {RemoteIpComponent}          from './remote-ip/remote-ip.component';
import {RemoteIpDetailComponent}    from './remote-ip/remote-ip-details.component';
import {RemoteIpService}            from './remote-ip/remote-ip.service';
import {QueueRuleComponent}         from './queue-rule/queue-rule.component';
import {QueueRuleDetailsComponent}  from './queue-rule/queue-rule-details.component';
import {QueueRuleService}           from './queue-rule/queue-rule.service';
import {QueueRuleFormComponent}     from './queue-rule/queue-rule-form.component';
import {RemoteIpFormComponent}      from './remote-ip/remote-ip-form.component';
import {LocalIpComponent}           from './local-ip/local-ip.component';
import {LocalIpFormComponent}       from './local-ip/local-ip-form.component';
import {NetComponent}               from './net/net.component';
import {NetFormComponent}           from './net/net-form.component';
import {ProviderFormComponent}      from './provider/provider-form.component';
import {ProviderComponent}          from './provider/provider.component';
import {QueueTypeComponent}         from './queue-type/queue-type.component';
import {QueueTypeFormComponent}     from './queue-type/queue-type-form.component';
import {TrafficQueueComponent}      from './traffic-queue/traffic-queue.component';
import {TrafficQueueFormComponent}  from './traffic-queue/traffic-queue-form.component';
import {LocalIpService}             from './local-ip/local-ip.service';
import {NetService}                 from './net/net.service';
import {ProviderService}            from './provider/provider.service';
import {QueueTypeService}           from './queue-type/queue-type.service';
import {TrafficQueueService}        from './traffic-queue/traffic-queue.service';
import {RoleComponent}              from './role/role.component';
import {RoleFormComponent}          from './role/role-form.component';
import {RoleService}                from './role/role.service';
import {UserService}                from './user/user.service';
import {UserComponent}              from './user/user.component';
import {UserFormComponent}          from './user/user-form.component';
import {UserIpService}              from './user-ip/user-ip.service';
import {UserIpComponent}            from './user-ip/user-ip.component';
import {UserIpFormComponent}        from './user-ip/user-ip-form.component';
import {LoginService}               from './login/login.service';
import {LoginComponent}             from './login/login.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
        LocalIpComponent,
        LocalIpFormComponent,
        NetComponent,
        NetFormComponent,
        ProviderComponent,
        ProviderFormComponent,
        QueueTypeComponent,
        QueueTypeFormComponent,
        TrafficQueueComponent,
        TrafficQueueFormComponent,
        RoleComponent,
        RoleFormComponent,
        UserComponent,
        UserFormComponent,
        UserIpComponent,
        UserIpFormComponent,
        LoginComponent
  ],
    providers: [
        Globals,
        RemoteIpService,
        QueueRuleService,
        LocalIpService,
        NetService,
        ProviderService,
        QueueTypeService,
        TrafficQueueService,
        RoleService,
        UserService,
        UserIpService,
        LoginService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
