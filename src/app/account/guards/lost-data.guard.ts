import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AddWineComponent} from "../containers/add-wine/add-wine.component";

@Injectable()
export class LostDataGuard implements CanDeactivate<any> {
  canDeactivate(
    component: AddWineComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.unsavedData() || confirm("Are You realy want to leave page without saving the data?");
  }
}
