import { StorageService } from '../services/storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private storageService: StorageService) {}
  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userType = this.storageService.getUserType();

    if (userType) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
