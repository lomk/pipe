import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {TesterComponent}              from './tester.component';
import {RemoteIpComponent}            from '../remote-ip/remote-ip.component';
import {RemoteIpFormComponent}        from '../remote-ip/remote-ip-form.component';
import {QueueRuleComponent}           from '../queue-rule/queue-rule.component';
import {QueueRuleFormComponent}       from '../queue-rule/queue-rule-form.component';
import {TesterGuard}                  from './tester-guard.service';


const testerRoutes: Routes = [
  {
    path: 'tester', component: TesterComponent,
    canActivate: [TesterGuard],
    children: [
      { path: 'remote-ips',               component: RemoteIpComponent },
      { path: 'remote-ips/new',            component: RemoteIpFormComponent },
      { path: 'queue-rules',              component: QueueRuleComponent },
      { path: 'queue-rules/new',           component: QueueRuleFormComponent }
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
