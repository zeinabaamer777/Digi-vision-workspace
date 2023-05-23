import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged$ = new BehaviorSubject<boolean>(false);

  constructor(private storageService: StorageService) {}

  logout() {
    this.storageService.deleteStorage('userType');
    this.isLogged$.next(false);
  }
}
