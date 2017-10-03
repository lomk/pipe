import {Component, OnInit}      from '@angular/core';
import {RoleService}            from './role.service';
import {Role}                   from './role';
import {Router}                 from '@angular/router';
import {NgForm}                 from '@angular/forms';

@Component({
    selector: 'role-form',
    templateUrl: './role-form.component.html',
    providers: [ RoleService]
})
export class RoleFormComponent implements OnInit {
    role = new Role();
    error: String;

    constructor(private router: Router,
                private roleService: RoleService) {
    }

    ngOnInit(): void {
    }

    goToDetail(): void {
        this.router.navigate(['/role-details']);
    }

    onFormSubmit(form: NgForm) {
        let newRole = new Role();
        newRole.name = form.controls['name'].value;
        this.roleService.create(newRole)
            .subscribe(role => {this.role = role; this.router.navigate(['/roles'])
                .catch(error =>  console.error('asdasdasdasdasd'));
            });
    }
}
