import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FieldConfig } from '../configs/field.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  iStreamBaseUrl = 'http://172.16.0.140:8088/';


  constructor(private http: HttpClient) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        Authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJzdHJlYW1faGtpIiwiRXhwaXJhdGlvblRpbWUiOiIyMDIwLTAzLTA5VDE5OjE3OjEyLjg2OTMxMzIrMDY6MDAiLCJDb25uZWN0aW9uU3RyaW5nIjp7IkNvbm5lY3Rpb25TdHJpbmdWYWx1ZSI6IlNlcnZlcj0xNzIuMTYuMC4xNTA7UG9ydD01NDMyO0RhdGFiYXNlPWhraV9saXZlX2RhdGE7VXNlciBJZD1wb3N0Z3JlcztQYXNzd29yZD1KQG50cmlrMDA3IztDb21tYW5kVGltZW91dD02MDA7IiwiR2lzQXBwVXJsIjoiIiwiU2VjcmV0S2V5IjoiU2VjcmV0S2V5XzEyZTJjOTJiNTk3MjRiYjI5ODQ4YWVkZjkxZTE4MmQ2IiwiSXNjbG91ZEtleSI6IktleV9pc0Nsb3VkIiwiR2Vvc2VydmVyV29ya3NwYWNlIjoiaXN0cmVhbSIsIkdlb3NlcnZlckRhdGFTdG9yZSI6ImlzdHJlYW1fc3RvcmUiLCJQb3N0Z3Jlc0RhdGFCYXNlTmFtZSI6InN0cmVhbV9oa2kiLCJJZCI6IjIiLCJDcmVhdGVUaW1lIjoiMjAxNy0wNy0xMFQxMjo0Mzo0My42MTMwMzMiLCJMYXN0TW9kaWZpZWRUaW1lIjpudWxsLCJJc0RlbGV0ZWQiOmZhbHNlLCJDcmVhdGVkQnkiOm51bGwsIkxhc3RNb2RpZmllZEJ5IjpudWxsfSwiSXNTdXBlckFkbWluIjpmYWxzZSwiVXNlclRyYWNrVGFibGVJZCI6IjBkMmI5MTZhN2U1OTQ1OWE4MzM0ZDFhZWRkOTdmZWJjIn0.bKkaJqoE9o-eUxt19b_YnnSijniJPwZjDZKJ15uuYfo6ouJZHX3DLKg2Fx4rE3y9W-DWGVjEo96tE2V4kYzf7A'
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

  
  fetchOption(optionUrl){
    //console.log(this.iStreamBaseUrl+this.iStreamDropOption1)
    return this.http.get<any>(this.iStreamBaseUrl+optionUrl);
  }

}
