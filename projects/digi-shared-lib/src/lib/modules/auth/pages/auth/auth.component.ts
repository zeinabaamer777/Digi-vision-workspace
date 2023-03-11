import { ToastService } from './../../../core/services/toaster.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginForm!: FormGroup;
  loading!: boolean;

  loggedInRole: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private storageService: StorageService
  ) {
    this.loggedInRole = this.authService.role;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * submit login form for admin/user
   */
  submit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loading = true;
      const { username, password } = this.loginForm.value;

      const userType = () => {
        return username == 'user' && password == 'user';
      };

      const adminType = () => {
        return username == 'admin' && password == 'admin';
      };

      if (this.loggedInRole == 'user' && userType()) {
        this.storageService.setStorage('userType', 'user');
        this.router.navigate(['/']);
        this.toastService.success('Welcome Dear User!');
        this.loading = false;
      } else if (this.loggedInRole == 'admin' && adminType()) {
        localStorage.setItem('userType', 'admin');
        this.router.navigate(['/']);
        this.toastService.success('Welcome Dear Admin!');
        this.loading = false;
      } else {
        this.toastService.error('Invalid credentials');
        this.loading = false;
      }
    }
  }

  /**
   *
   * @param controlName the name of checked control
   * @returns if the control has a required error
   */
  hasError(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) return false;

    return control.hasError('required') && (control.dirty || control.touched);
  }
}
