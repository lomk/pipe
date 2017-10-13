import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {TesterComponent}              from './tester.component';
import {RemoteIpComponent}            from '../remote-ip/remote-ip.component';
import {RemoteIpDetailComponent}      from '../remote-ip/remote-ip-details.component';
import {RemoteIpFormComponent}        from '../remote-ip/remote-ip-form.component';
import {QueueRuleComponent}           from '../queue-rule/queue-rule.component';
import {QueueRuleDetailsComponent}    from '../queue-rule/queue-rule-details.component';
import {QueueRuleFormComponent}       from '../queue-rule/queue-rule-form.component';

const testerRoutes: Routes = [
  {
    path: 'tester', component: TesterComponent,
    children: [
      { path: 'remote-ips',               component: RemoteIpComponent },
      { path: 'remote-ip-details/:id',    component: RemoteIpDetailComponent },
      { path: 'new-remote-ip',            component: RemoteIpFormComponent },
      { path: 'queue-rules',              component: QueueRuleComponent },
      { path: 'queue-rule-details/:id',   component: QueueRuleDetailsComponent },
      { path: 'new-queue-rule',           component: QueueRuleFormComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(testerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TesterRoutingModule { }
