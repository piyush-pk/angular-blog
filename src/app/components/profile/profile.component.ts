import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ShowToastrService } from 'src/app/services/show-toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private _fb: FormBuilder, private _auth: AuthService, private _router: Router, private _toast: ShowToastrService) {}

  userFormData!: FormGroup;

  ngOnInit(): void {
    // initializing profile FormGroup
    this.userFormData = this._fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    // setting value to profile
    this._auth.getProfile().subscribe((res:any)=> {
      if(res.body){
        this.userFormData.patchValue({
          name: res.body.name,
          email: res.body.email
        })
      }
    });
  }

  updateUser() {
    if(this.userFormData.valid) {
      this._auth.userUpdate(this.userFormData.value).subscribe(response=> {
        this._toast.showToastr(response.body, true);
      });
      this._router.navigate(['/']);
    }
  }
}
