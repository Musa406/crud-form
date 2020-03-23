import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FieldConfig } from '../configs/field.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  iStreamBaseUrl = 'http://localhost:8088/';


  constructor(private http: HttpClient) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        Authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJzdHJlYW1fZnJlc2giLCJFeHBpcmF0aW9uVGltZSI6IjIwMjAtMDMtMjFUMjE6NTE6NTQuNzE3NjI4KzA2OjAwIiwiQ29ubmVjdGlvblN0cmluZyI6eyJDb25uZWN0aW9uU3RyaW5nVmFsdWUiOiJTZXJ2ZXI9bG9jYWxob3N0O1BvcnQ9NTQzMjtEYXRhYmFzZT1pc3RyZWFtO1VzZXIgSWQ9cG9zdGdyZXM7UGFzc3dvcmQ9amFudHJpazEyMztDb21tYW5kVGltZW91dD02MDA7IiwiR2lzQXBwVXJsIjoiaHR0cDovL3N0cmVhbS5zdHJlYW1zdGVjaC5jb20vNzg2QTE2QkUtNjZFOS00NjgzLThBOUMtMTI3NEJGRTY4Qzc3LyIsIklkIjoiMSIsIkNyZWF0ZVRpbWUiOiIyMDE3LTA3LTEwVDEyOjQzOjQzLjYxMzAzMyIsIkxhc3RNb2RpZmllZFRpbWUiOm51bGwsIklzRGVsZXRlZCI6ZmFsc2UsIkNyZWF0ZWRCeSI6bnVsbCwiTGFzdE1vZGlmaWVkQnkiOm51bGx9LCJJc1N1cGVyQWRtaW4iOnRydWV9.oEUSxG9OCLhwDaB-qpa51Ca6BNBoJsHSf6VzybprxoVLfLWijn91Fh6z9qGVgPqNEcolbyvuSLI39Z1KFX02_g'
      }
    });

    return next.handle(req);
  }

  fetchConfig(modelName: string){
    const configAPI = this.getUrl(modelName);
    return this.http.get<[]>(configAPI);
  }
  
  getUrl(modelName): any {
    return this.iStreamBaseUrl+'config/'+modelName+'/get';
  }

  
  fetchOption(optionUrl): Observable<any>{
    //console.log(this.iStreamBaseUrl+this.iStreamDropOption1)
    return this.http.get<any>(this.iStreamBaseUrl+optionUrl);
  }

}
