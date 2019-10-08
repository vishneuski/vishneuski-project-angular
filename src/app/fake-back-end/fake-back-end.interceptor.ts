import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import endpoints from './endpoints';
import { checkUrl } from './helpers';
import {
  getCart,
  getProducts,
} from './routes';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { body } = request;

    console.log('request', request);

    return of(null).pipe(
      mergeMap(handleRoute),
      materialize(),
      delay(500),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case checkUrl(request, endpoints.purchase.cart):
          return getCart();
        case checkUrl(request, endpoints.catalog.products):
          return getProducts();
        default:
          return next.handle(request);
      }
    }
  }
}
