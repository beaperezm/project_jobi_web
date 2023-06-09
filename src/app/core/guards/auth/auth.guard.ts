import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { UserServiceService } from '../../services/user/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor (private auth: UserServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.userLogged$.pipe(
      take(1),
      map((isLogged: boolean) => {
        if(isLogged) { return true };
        return this.router.createUrlTree(['login'])
      })
    )
  }
  
}
