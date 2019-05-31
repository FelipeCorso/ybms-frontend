import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpApiKeyInterceptorService} from "./http-api-key-interceptor.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpApiKeyInterceptorService, multi: true}],
})
export class HttpInterceptorModule {
}
