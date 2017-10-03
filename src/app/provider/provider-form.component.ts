import {Component, OnInit} from '@angular/core';
import {ProviderService} from './provider.service';
import {Provider} from './provider';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'provider-form',
    templateUrl: './provider-form.component.html',
    providers: [ ProviderService]
})
export class ProviderFormComponent implements OnInit {
    provider = new Provider();
    error: String;

    constructor(private router: Router,
                private providerService: ProviderService) {
    }

    ngOnInit(): void {
    }

    goToDetail(): void {
        this.router.navigate(['/provider-details']);
    }

    onFormSubmit(form: NgForm) {
        let newProvider = new Provider();
        newProvider.name = form.controls['name'].value;
        newProvider.pktMark = form.controls['pktMark'].value;
        this.providerService.create(newProvider)
            .subscribe(provider => {this.provider = provider; this.router.navigate(['/providers'])
                .catch(error =>  console.error('asdasdasdasdasd'));
            });
    }
}
