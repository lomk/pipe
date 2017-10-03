import { Component, OnInit }    from '@angular/core';

import { User }              from './user';
import { UserService }       from './user.service';
import {Router}                 from '@angular/router';

@Component({
    selector: 'my-local-ips',
    templateUrl: './user.component.html' ,
    // styleUrls: [`./local-ip.component.css`],
    providers: [UserService]
})
export class UserComponent implements OnInit {
    users: User[];
    selectedUser: User;

    constructor(
        private router: Router,
        private userService: UserService) { }

    getUsers(): void {
        this.userService.getUsers().subscribe(users => this.users = users);
    }

    delete(user: User): void {
        this.userService
            .delete(user.id)
            .subscribe(() => {
                this.users = this.users.filter(h => h !== user);
                if (this.selectedUser === user) { this.selectedUser = null; }
            });
    }

    ngOnInit(): void {
        this.getUsers();
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    }

    goToDetail(): void {
        this.router.navigate(['/local-ip-details', this.selectedUser.id]);
    }
}
