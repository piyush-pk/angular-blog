import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/functions/confirm-password.validators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ShowToastrService } from 'src/app/services/show-toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _fb: FormBuilder, private _auth: AuthService, private _router: Router, private _toast: ShowToastrService) {}

  userFormData!: FormGroup;

  ngOnInit(): void {
    this.userFormData = this._fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }, {
      validator: ConfirmedValidator('password', 'cPassword')
    });
  }

  registerUser() {
    if(this.userFormData.valid) {
      this._auth.userRegister(this.userFormData.value).subscribe((response:any)=>{
        this._toast.showToastr(response, true);
        if(response.body.error){
          return;
        }
        this._router.navigate(['/login']);
      });
    }
  }
}
