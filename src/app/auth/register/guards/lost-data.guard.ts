import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {RegisterComponent} from "../containers/register/register.component";

@Injectable()
export class LostDataGuard implements CanDeactivate<any> {
  canDeactivate(
    component: RegisterComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.unsavedData() || confirm("Are You realy want to leave page without saving the data?");
  }
}
