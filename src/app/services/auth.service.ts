import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _cookieService: CookieService) { }

  url = "https://node-blog-api-production.up.railway.app/api/user/"

  loginStatus = new BehaviorSubject<boolean>(false);

  userLogin(data: FormData) {
    return this._http.post(this.url + 'login', data, {observe: 'response', withCredentials: true});
  }

  userRegister(data: FormData) {
    return this._http.post(this.url + 'register', data);
  }

  getProfile() {
    const id = this._cookieService.get('id');
    return this._http.get(this.url + id, {observe: 'response', withCredentials: true});
  }

  logout() {
    return this._http.post(this.url + 'logout', {}, {observe: 'response', withCredentials: true});
  }

  isUserAuthenticated() {
    return !!document.cookie;
  }

  userUpdate(data: FormData){
    let id = this._cookieService.get('id');
    return this._http.put(this.url + id, data, {observe: 'response', withCredentials: true})
  }

}
