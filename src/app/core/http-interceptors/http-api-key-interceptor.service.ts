import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlatformLocation} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HttpApiKeyInterceptorService implements HttpInterceptor {

  private apiUrl: string = "https://api.themoviedb.org/3/";
  private apiKey: string = "daaab0a5b8afc79e7f7f4555434d862d";

  constructor(private platformLocation: PlatformLocation
  ) {
  }

  public intercept(originalReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const roleParam = pathUrl.includes("hr") ? "HR" : "MANAGER";
    let newParams = new HttpParams({fromString: originalReq.params.toString()});
    newParams = newParams.append('api_key', this.apiKey);
    const requestClone = originalReq.clone({
      url: `${this.apiUrl}${originalReq.url}`,
      params: newParams,
      // body: this.buildRequestBody(originalReq.body, roleParam)
    });
    return next.handle(requestClone);
    /*
    if (this.platformLocation.hash) {
      const pathUrl = this.platformLocation.hash;
      const verifyRole = pathUrl.includes("hr") || pathUrl.includes("manager");
      if (verifyRole) {
        const roleParam = pathUrl.includes("hr") ? "HR" : "MANAGER";
        let newParams = new HttpParams({fromString: originalReq.params.toString()});
        newParams = newParams.append('context', roleParam);
        const requestClone = originalReq.clone({
          params: newParams,
          body: this.buildRequestBody(originalReq.body, roleParam)
        });
        return next.handle(requestClone);
      }
    }
    return next.handle(originalReq);
    */
  }

  private buildRequestBody(body: any, roleParam: string): any {
    if (!body) {
      body = {context: roleParam};
    } else {
      body.context = roleParam;
    }

    return body;
  }
}
