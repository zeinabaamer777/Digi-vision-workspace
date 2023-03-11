import { Injectable } from '@angular/core';
import { SharedLibConfigService } from './shared-lib-config.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: any;
  isLogged$ = new BehaviorSubject<boolean>(false);
  storageKey: any;

  constructor(
    private sharedLibConfigService: SharedLibConfigService,
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {
    this.role = this.sharedLibConfigService.configuration.role;

    this.storageKey = this.sharedLibConfigService.configuration.storageKey;
  }

  logout() {
    this.storageService.deleteStorage(this.storageKey);
    this.isLogged$.next(false);
  }
}
