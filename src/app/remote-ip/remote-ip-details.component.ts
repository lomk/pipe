import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { RemoteIp }         from './remote-ip';
import { RemoteIpService }  from './remote-ip.service';
@Component({
    selector: 'remoteIp-detail',
    templateUrl: './remote-ip-details.component.html',
    // styleUrls: [ './remote-ip-details.component.css' ]
})
export class RemoteIpDetailComponent implements OnInit {
    remoteIp: RemoteIp;

    constructor(
        private remoteIpService: RemoteIpService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.remoteIpService.getRemoteIp(+params.get('id')))
            .subscribe(remoteIp => this.remoteIp = remoteIp);
    }

    goBack(): void {
        this.location.back();
    }
}
