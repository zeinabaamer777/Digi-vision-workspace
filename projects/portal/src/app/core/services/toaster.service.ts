import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastrService: ToastrService) {}

  success(message: string, config?: IndividualConfig) {
    return this.toastrService.success(
      message,
      'success',
      config || { timeOut: 3000 }
    );
  }

  error(message: string, config?: IndividualConfig) {
    return this.toastrService.error(
      message,
      'error',
      config || { timeOut: 3000 }
    );
  }

  info(message: string, config?: IndividualConfig) {
    return this.toastrService.info(
      message,
      'info',
      config || { timeOut: 3000 }
    );
  }

  warning(message: string, config?: IndividualConfig) {
    return this.toastrService.warning(
      message,
      'warning',
      config || { timeOut: 3000 }
    );
  }
}
