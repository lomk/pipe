
import {LogoutService}       from './logout.service';
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `<h1>Logout</h1>`,
  providers: [LogoutService]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private logoutService: LogoutService) {}

  ngOnInit(): void { console.log('Constructor initialised');
    this.logoutService.logout().subscribe();
    this.router.navigate(['/login']); }
}
