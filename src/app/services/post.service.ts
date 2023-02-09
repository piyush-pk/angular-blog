import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient, private _cookieService: CookieService) { }

  url = "https://node-blog-api-production.up.railway.app/api/post/"

  getAllPost() {
    return this._http.get(this.url, {observe: 'response', withCredentials: true});
  }

  getPost(id: string) {
    return this._http.get(this.url + id, {observe: 'response', withCredentials: true});
  }

  createPost(data: FormData) {
    return this._http.post(this.url + 'createPost', data, {observe: 'response', withCredentials: true});
  }

  myPost() {
    const id = this._cookieService.get('id');
    return this._http.get(this.url + 'all/' + id, {observe: 'response', withCredentials: true});
  }

  deletePost(id: string) {
    const userId = this._cookieService.get('id');
    return this._http.delete(this.url + 'delete/' + id + '/' + userId, {observe: 'response', withCredentials: true});
  }
}
