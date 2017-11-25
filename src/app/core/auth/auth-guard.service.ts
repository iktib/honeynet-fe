import { Injectable } from '@angular/core'
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'
import { CanActivate } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.loggedIn()) {
      return true
    } else {
      if (state.url.indexOf('publisher') >= 0) {
        this.router.navigate(['login/publisher'])
      } else {
        this.router.navigate(['login/advertiser'])
      }
      return false
    }
  }
}
