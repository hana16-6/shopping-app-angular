import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.setIsLoading(true);
    return next.handle(request).pipe(finalize(()=>this.loaderService.setIsLoading(false)))
  }
}
