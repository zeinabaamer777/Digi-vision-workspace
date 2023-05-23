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
    let role = route.data['role'];
    if (!this.storageService.getUserType()) {
      this.router.navigate(['/login']);
      return false;
    }
    if (this.storageService.getUserType != role) {
      this.router.navigate(['/not-authorized']);
      return false;
    }
    return true;
  }
}
