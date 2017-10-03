import { Component, OnInit } from '@angular/core';

import { RemoteIp } from './remote-ip';
import { RemoteIpService } from './remote-ip.service';
import {Router} from '@angular/router';

@Component({
    selector: 'my-remote-ips',
    templateUrl: './remote-ip.component.html' ,
    // styleUrls: [`./remote-ip.component.css`],
    providers: [RemoteIpService]
})
export class RemoteIpComponent implements OnInit {
    remoteIps: RemoteIp[];
    selectedRemoteIp: RemoteIp;

    constructor(
        private router: Router,
        private remoteIpService: RemoteIpService) { }

    getRemoteIps(): void {
        this.remoteIpService.getRemoteIps().subscribe(remoteIps => this.remoteIps = remoteIps);
    }

    delete(remoteIp: RemoteIp): void {
        this.remoteIpService
            .delete(remoteIp.id)
            .subscribe(() => {
                this.remoteIps = this.remoteIps.filter(h => h !== remoteIp);
                if (this.selectedRemoteIp === remoteIp) { this.selectedRemoteIp = null; }
            });
    }

    ngOnInit(): void {
        this.getRemoteIps();
    }

    onSelect(remoteIp: RemoteIp): void {
        this.selectedRemoteIp = remoteIp;
    }

    goToDetail(): void {
        this.router.navigate(['/remote-ip-details', this.selectedRemoteIp.id]);
    }
}
