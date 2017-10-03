import { Component, OnInit } from '@angular/core';

import { Role } from './role';
import { RoleService } from './role.service';
import {Router} from '@angular/router';

@Component({
    selector: 'my-roles',
    templateUrl: './role.component.html' ,
    providers: [RoleService]
})
export class RoleComponent implements OnInit {
    roles: Role[];
    selectedRole: Role;

    constructor(
        private router: Router,
        private roleService: RoleService) { }

    getRoles(): void {
        this.roleService.getRoles().subscribe(roles => this.roles = roles);
    }


    delete(role: Role): void {
        this.roleService
            .delete(role.id)
            .subscribe(() => {
                this.roles = this.roles.filter(h => h !== role);
                if (this.selectedRole === role) { this.selectedRole = null; }
            });
    }

    ngOnInit(): void {
        this.getRoles();
    }

    onSelect(role: Role): void {
        this.selectedRole = role;
    }

    goToDetail(): void {
        this.router.navigate(['/role-details', this.selectedRole.id]);
    }
}