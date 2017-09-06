import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return next.handle(req); // This allows the request to continue its journey.

        // We need to clone the request because it's immutable.
        // const copiedReq = req.clone({headers: req.headers.append('', '')});
        const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
        return next.handle(copiedReq);
    }
}
