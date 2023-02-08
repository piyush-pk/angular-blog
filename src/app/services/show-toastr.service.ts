import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShowToastrService {

  constructor(private _toastr: ToastrService) { }

  showToastr(data: any, isResponse: boolean) {
    const option = {positionClass: 'toast-bottom-right'}
    if(isResponse) {
      const msgType = Object.keys(data);
      switch (msgType[0]) {
        case 'success':
          this._toastr.success(data.success, 'success', option);
          break;
        case 'warning':
          this._toastr.warning(data.warning, 'warning', option);
          break;
        case 'error':
          this._toastr.error(data.error, 'error', option);
          break;
        default:
          this._toastr.info(data, 'info', option)
          break;
      }
      return;
    }
    this._toastr.info(data, 'info', option)

  }

}
