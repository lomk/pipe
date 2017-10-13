
import {ActivatedRouteSnapshot,
        CanActivate,
        Router,
        RouterStateSnapshot}    from '@angular/router';

import {AuthService}            from '../auth/auth.service';
import {Injectable}             from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
  private res = false;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.checkAdmin();
    console.log(this.res);
    return this.res;
  }

  checkAdmin(): void {
    this.authService.getCurrentUser().map((user) => {
      console.log('123123');
      if (user.role.name === 'ADMIN') { this.res = true;
      console.log('YES');
    } else {
        console.log('NO');
        this.router.navigate(['/' + user.role.name.toLowerCase()]);
      }}, error => {
          this.router.navigate(['/login']);
        });
  }
}
