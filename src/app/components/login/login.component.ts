import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ShowToastrService } from 'src/app/services/show-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private cookieService:CookieService, private router: Router, private _toast: ShowToastrService){}

  fg!: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    this.auth.userLogin(this.fg.value).subscribe((response:any)=>{
      this._toast.showToastr(response.body, true);
      if(response.body.error) {
        return;
      }
      this.cookieService.set('jwt', response.body.token);
      this.cookieService.set('id', response.body.id);
      this.router.navigateByUrl('/');
      this.auth.loginStatus.next(true);
    });
  }
}
