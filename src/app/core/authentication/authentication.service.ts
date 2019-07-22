import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call
    const data = {
      validUser: true,
      isAdmin: false,
      username: context.username,
      token: '123456'
    };
    const watchbox = 'watchbox';
    const partner = 'partner';
    if (data.username.toLowerCase() == watchbox || data.username.toLowerCase() == partner) {
      if (data.username.toLowerCase() == watchbox) {
        data.isAdmin = true;
      }
      this.credentialsService.setCredentials(data, context.remember);
    } else {
      data.validUser = false;
    }
    return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
