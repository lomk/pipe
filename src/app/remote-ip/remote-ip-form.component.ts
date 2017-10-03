import {Component, OnInit} from '@angular/core';
import {RemoteIpService} from './remote-ip.service';
import {RemoteIp} from './remote-ip';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'remote-ip-form',
    templateUrl: './remote-ip-form.component.html',
    providers: [ RemoteIpService]
})
export class RemoteIpFormComponent implements OnInit {
    remoteIp = new RemoteIp();
    error: String;

    constructor(private router: Router,
                private remoteIpService: RemoteIpService) {
    }

    ngOnInit(): void {
    }


    goToDetail(): void {
        this.router.navigate(['/remote-ip-details']);
    }

    onFormSubmit(form: NgForm) {
        let address = form.controls['address'].value;
        let newRemoteIp = new RemoteIp();
        newRemoteIp.address = address;
        newRemoteIp.mask = 32;
        this.remoteIpService.create(newRemoteIp)
                .subscribe(remoteIp => {this.remoteIp = remoteIp; this.router.navigate(['/remote-ips'])
                .catch(error =>  console.error('asdasdasdasdasd'));
        });
    }
}
