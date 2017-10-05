import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import {RemoteIpComponent}          from './remote-ip/remote-ip.component';
import {RemoteIpDetailComponent}    from './remote-ip/remote-ip-details.component';
import {QueueRuleComponent}         from './queue-rule/queue-rule.component';
import {QueueRuleDetailsComponent}  from './queue-rule/queue-rule-details.component';
import {QueueRuleFormComponent}     from './queue-rule/queue-rule-form.component';
import {RemoteIpFormComponent}      from './remote-ip/remote-ip-form.component';
import {LocalIpComponent}           from './local-ip/local-ip.component';
import {LocalIpFormComponent}       from './local-ip/local-ip-form.component';
import {NetComponent}               from './net/net.component';
import {ProviderComponent}          from './provider/provider.component';
import {NetFormComponent}           from './net/net-form.component';
import {ProviderFormComponent}      from './provider/provider-form.component';
import {QueueTypeComponent}         from './queue-type/queue-type.component';
import {QueueTypeFormComponent}     from './queue-type/queue-type-form.component';
import {TrafficQueueComponent}      from './traffic-queue/traffic-queue.component';
import {TrafficQueueFormComponent}  from './traffic-queue/traffic-queue-form.component';
import {RoleFormComponent}          from './role/role-form.component';
import {RoleComponent}              from './role/role.component';
import {UserComponent}              from './user/user.component';
import {UserFormComponent}          from './user/user-form.component';
import {UserIpComponent}            from './user-ip/user-ip.component';
import {UserIpFormComponent}        from './user-ip/user-ip-form.component';
import {LoginComponent}             from './login/login.component';

const routes: Routes = [
    { path: '',                         redirectTo: '/remote-ips', pathMatch: 'full' },
    { path: 'remote-ips',               component: RemoteIpComponent },
    { path: 'remote-ip-details/:id',    component: RemoteIpDetailComponent },
    { path: 'new-remote-ip',            component: RemoteIpFormComponent },
    { path: 'queue-rules',              component: QueueRuleComponent },
    { path: 'queue-rule-details/:id',   component: QueueRuleDetailsComponent },
    { path: 'new-queue-rule',           component: QueueRuleFormComponent },
    { path: 'local-ips',                component: LocalIpComponent },
    { path: 'new-local-ip',             component: LocalIpFormComponent },
    { path: 'nets',                     component: NetComponent },
    { path: 'new-net',                  component: NetFormComponent},
    { path: 'providers',                component: ProviderComponent},
    { path: 'new-provider',             component: ProviderFormComponent},
    { path: 'queue-types',              component: QueueTypeComponent},
    { path: 'new-queue-type',           component: QueueTypeFormComponent},
    { path: 'traffic-queues',           component: TrafficQueueComponent},
    { path: 'new-traffic-queue',        component: TrafficQueueFormComponent},
    { path: 'new-role',                 component: RoleFormComponent},
    { path: 'roles',                    component: RoleComponent},
    { path: 'users',                    component: UserComponent},
    { path: 'new-user',                 component: UserFormComponent},
    { path: 'user-ips',                 component: UserIpComponent},
    { path: 'new-user-ip',              component: UserIpFormComponent},
    { path: 'login',                    component: LoginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
