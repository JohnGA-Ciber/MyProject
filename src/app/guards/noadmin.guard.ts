import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNull, isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { Vars } from '../config/vars.config';
@Injectable({
  providedIn: 'root'
})
export class noAdmin implements CanActivate {

  constructor(private Afauth: AngularFireAuth,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.Afauth.authState.pipe(map(auth => {
      var dd = auth;
      if (isNullOrUndefined(auth)) {
        this.router.navigate(['/home']);
          return false;
      }else{
        if (dd.email === Vars.adminEmail) {
          return true;
        } else {
          this.router.navigate(['/perfil']);
          return false;
        }
      }

    }));


  }

}
