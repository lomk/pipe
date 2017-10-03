import { Component, OnInit } from '@angular/core';

import { Provider } from './provider';
import { ProviderService } from './provider.service';
import {Router} from '@angular/router';

@Component({
    selector: 'my-providers',
    templateUrl: './provider.component.html' ,
    providers: [ProviderService]
})
export class ProviderComponent implements OnInit {
    providers: Provider[];
    selectedProvider: Provider;

    constructor(
        private router: Router,
        private providerService: ProviderService) { }

    getProviders(): void {
        this.providerService.getProviders().subscribe(providers => this.providers = providers);
    }


    delete(provider: Provider): void {
        this.providerService
            .delete(provider.id)
            .subscribe(() => {
                this.providers = this.providers.filter(h => h !== provider);
                if (this.selectedProvider === provider) { this.selectedProvider = null; }
            });
    }

    ngOnInit(): void {
        this.getProviders();
    }

    onSelect(provider: Provider): void {
        this.selectedProvider = provider;
    }

    goToDetail(): void {
        this.router.navigate(['/provider-details', this.selectedProvider.id]);
    }
}
