import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {HttpModule}                 from '@angular/http';

import {AppRoutingModule}           from '../app-routing.module';
import {Globals }                   from '../globals';
import {RemoteIpService}            from '../remote-ip/remote-ip.service';
import {QueueRuleService}           from '../queue-rule/queue-rule.service';
import {TrafficQueueService}        from '../traffic-queue/traffic-queue.service';
import {TesterComponent}            from './tester.component';
import {AuthService}                from '../auth/auth.service';
import {TesterGuard}                from './tester-guard.service';



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
    AuthService,
    TesterGuard
  ],
  exports: [
    TesterComponent
  ]
})
export class TesterModule { }
