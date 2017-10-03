import {Component, OnInit} from '@angular/core';
import {NetService} from './net.service';
import {Net} from './net';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'net-form',
    templateUrl: './net-form.component.html',
    providers: [ NetService]
})
export class NetFormComponent implements OnInit {
    net = new Net();
    error: String;

    constructor(private router: Router,
                private netService: NetService) {
    }

    ngOnInit(): void {
    }


    goToDetail(): void {
        this.router.navigate(['/net-details']);
    }

    onFormSubmit(form: NgForm) {
        let newNet = new Net();
        newNet.firstOctet = form.controls['firstOctet'].value;
        newNet.secondOctet = form.controls['secondOctet'].value;
        newNet.thirdOctet = form.controls['thirdOctet'].value;
        newNet.lastOctet = form.controls['lastOctet'].value;
        newNet.mask = form.controls['mask'].value;
        this.netService.create(newNet)
            .subscribe(net => {this.net = net; this.router.navigate(['/nets'])
                .catch(error =>  console.log(error));
            });
    }
}
