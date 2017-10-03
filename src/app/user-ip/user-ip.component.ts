import { Component, OnInit }    from '@angular/core';

import { UserIp }              from './user-ip';
import { UserIpService }       from './user-ip.service';
import {Router}                 from '@angular/router';

@Component({
    selector: 'my-local-ips',
    templateUrl: './user-ip.component.html' ,
    // styleUrls: [`./local-ip.component.css`],
    providers: [UserIpService]
})
export class UserIpComponent implements OnInit {
    userIps: UserIp[];
    selectedUserIp: UserIp;

    constructor(
        private router: Router,
        private userIpService: UserIpService) { }

    getUserIps(): void {
        this.userIpService.getUserIps().subscribe(userIps => this.userIps = userIps);
    }

    delete(userIp: UserIp): void {
        this.userIpService
            .delete(userIp.id)
            .subscribe(() => {
                this.userIps = this.userIps.filter(h => h !== userIp);
                if (this.selectedUserIp === userIp) { this.selectedUserIp = null; }
            });
    }

    ngOnInit(): void {
        this.getUserIps();
    }

    onSelect(userIp: UserIp): void {
        this.selectedUserIp = userIp;
    }

    goToDetail(): void {
        this.router.navigate(['/local-ip-details', this.selectedUserIp.id]);
    }
}
