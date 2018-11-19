import { Login, AuthActionTypes, LoginSuccess, LoginFailure } from '../actions/auth.actions';
import { AuthService } from '../../../auth/services/auth.service';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { InfoService } from 'src/app/shared/services';
import { IUser } from '../../../auth/models';
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map((action) => action.payload),
    exhaustMap((credentials: IUser) =>
      this.authService
        .login(credentials.email, credentials.password)
        .pipe(
          map(auth => auth ? new LoginSuccess({ email: credentials.email, token: auth.access_token }) : new LoginFailure(false)),
          catchError(error => observableOf(new LoginFailure(error)))
        )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap((action: any) => {
      localStorage.setItem('token', action.payload.token);
      this.router.navigate(['home']);
      this.infoService.showInfo('You were successfully logged in.');
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect),
    tap(_ => this.router.navigate(['login'])),
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    tap(_ => this.router.navigate(['home'])),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private infoService: InfoService
    ) { }
}
