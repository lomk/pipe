import { Component, OnInit }    from '@angular/core';

import { LocalIp }              from './local-ip';
import { LocalIpService }       from './local-ip.service';
import {Router}                 from '@angular/router';

@Component({
    selector: 'my-local-ips',
    templateUrl: './local-ip.component.html' ,
    // styleUrls: [`./local-ip.component.css`],
    providers: [LocalIpService]
})
export class LocalIpComponent implements OnInit {
    localIps: LocalIp[];
    selectedLocalIp: LocalIp;

    constructor(
        private router: Router,
        private localIpService: LocalIpService) { }

    getLocalIps(): void {
        this.localIpService.getLocalIps().subscribe(localIps => this.localIps = localIps);
    }

    delete(localIp: LocalIp): void {
        this.localIpService
            .delete(localIp.id)
            .subscribe(() => {
                this.localIps = this.localIps.filter(h => h !== localIp);
                if (this.selectedLocalIp === localIp) { this.selectedLocalIp = null; }
            });
    }

    ngOnInit(): void {
        this.getLocalIps();
    }

    onSelect(localIp: LocalIp): void {
        this.selectedLocalIp = localIp;
    }

    goToDetail(): void {
        this.router.navigate(['/local-ip-details', this.selectedLocalIp.id]);
    }
}
