import { Component, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ShowToastrService } from 'src/app/services/show-toastr.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  isloggedIn = false;
  constructor(private _auth: AuthService, private _router: Router, private _toast: ShowToastrService, private _cookieService: CookieService) {}


  ngOnInit(): void {
    this._auth.loginStatus.next(this._auth.isUserAuthenticated());
    this._auth.loginStatus.subscribe(result => this.isloggedIn = result);
  }

  logout() {
    this._auth.logout().subscribe(response=> {
      this.isloggedIn = false;
      this._router.navigate(['/login']);
      this._cookieService.deleteAll();
      this._toast.showToastr(response.body, true);
      this._auth.loginStatus.next(false);
    });

  }
}
