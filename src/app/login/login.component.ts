
import {LoginService}       from './login.service';
import {Component, OnInit}  from '@angular/core';
import {User}               from '../user/user';
import {NgForm}             from '@angular/forms';
import {Router}             from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' ,
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  user: User = new User;

  constructor(private router: Router,
              private loginService: LoginService) {}

  onFormSubmit(form: NgForm) {
    this.loginService.login(form.controls['username'].value, form.controls['password'].value)
      .subscribe(response => {
        if ( response.status === 202 ) {
          this.router.navigate(['/local-ips']);
        }
      });
  }
  ngOnInit(): void { console.log('Constructor initialised'); }
}
