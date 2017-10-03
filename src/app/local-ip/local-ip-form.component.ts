import {NetService}         from '../net/net.service';
import {Net}                from '../net/net';
import {LocalIpService}     from './local-ip.service';
import {LocalIp}            from './local-ip';
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';
import {NgForm}             from '@angular/forms';

@Component({
    selector: 'local-ip-form',
    templateUrl: './local-ip-form.component.html',
    providers: [ LocalIpService]
})
export class LocalIpFormComponent implements OnInit {
    localIp = new LocalIp();
    nets: Net[];
    error: String;

    constructor(private router: Router,
                private localIpService: LocalIpService,
                private netService: NetService) {}

    getData(): void {
        this.netService.getNets().subscribe(nets => this.nets = nets);
    }
    ngOnInit(): void {
        this.getData();
    }

    onFormSubmit(form: NgForm) {
        let newLocalIp = new LocalIp();
        newLocalIp.address = form.controls['address'].value;
        newLocalIp.net = form.controls['net'].value;
        this.localIpService.create(newLocalIp)
            .subscribe(localIp => {this.localIp = localIp; this.router.navigate(['/local-ips'])
                .catch(error =>  console.error('asdasdasdasdasd'));
            });
    }
}
