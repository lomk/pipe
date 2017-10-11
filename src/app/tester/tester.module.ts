import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import {AppRoutingModule}           from '../app-routing.module';
import {Globals }                   from '../globals';
import {RemoteIpComponent}          from '../remote-ip/remote-ip.component';
import {RemoteIpDetailComponent}    from '../remote-ip/remote-ip-details.component';
import {RemoteIpService}            from '../remote-ip/remote-ip.service';
import {QueueRuleComponent}         from '../queue-rule/queue-rule.component';
import {QueueRuleDetailsComponent}  from '../queue-rule/queue-rule-details.component';
import {QueueRuleService}           from '../queue-rule/queue-rule.service';
import {QueueRuleFormComponent}     from '../queue-rule/queue-rule-form.component';
import {RemoteIpFormComponent}      from '../remote-ip/remote-ip-form.component';
import {TrafficQueueService}        from '../traffic-queue/traffic-queue.service';
import {LoginService}               from '../login/login.service';
import {LogoutService}              from '../logout/logout.service';
import {TesterComponent}            from "./tester.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    TesterComponent
  ],
  providers: [
    Globals,
    RemoteIpService,
    QueueRuleService,
    TrafficQueueService,
    LoginService,
    LogoutService
  ],
  exports: [
    TesterComponent
  ]
})
export class TesterModule { }
