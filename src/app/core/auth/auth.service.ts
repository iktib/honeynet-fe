import { Observable } from 'rxjs/Observable'
import { Injectable, Inject } from '@angular/core'
import { Http, Headers, RequestOptions, Response, Jsonp } from '@angular/http'
import 'rxjs/add/operator/map'
import { tokenNotExpired } from 'angular2-jwt'

import { APP_CONFIG, AppConfig } from '../../app.config'

export interface Credentials {
  email: string,
  password: string
}

@Injectable()
export class AuthService {
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  })
  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  public login(credentials: Credentials): Observable<any> {
    const options = new RequestOptions({ headers: this.headers })
    return this.http.post(this.config.apiEndpoint + '/signin', credentials, options)
      .map((response: Response) => response.json())
  }

  public loggedIn() {
    return tokenNotExpired('token')
  }
  public logout() {
    const lang = localStorage.getItem('language') || 'en'
    localStorage.clear()
    sessionStorage.clear()
    localStorage.setItem('language', lang)
    window.parent.postMessage('reset widget token', '*')

    // location.reload()
  }

  public forgotPassword(email): Observable<any> {
    const options = new RequestOptions({ headers: this.headers })
    return this.http.post(this.config.apiEndpoint + '/password/forgot', { email }, options)
      .map((response: Response) => response.json())
  }

  /* TODO fix &widget=true */
  public forgotPasswordWidget(email): Observable<any> {
    const options = new RequestOptions({ headers: this.headers })
    return this.http.post(this.config.apiEndpoint +
      '/password/forgot', { email }, options)
      .map((response: Response) => response.json())
  }

  public resetPassword(password, token): Observable<any> {
    const options = new RequestOptions({ headers: this.headers })
    return this.http.post(this.config.apiEndpoint + '/password/reset/' + token,
      { password }, options)
      .map((response: Response) => response.json())
  }

  public facebookSignIn(role): Observable<any> {
    return this.http.get(this.config.apiEndpoint + '/authenticate/facebook?role=' + role,
      { withCredentials: true })
      .map((response: Response) => response.json())
  }
  public googleSignIn(role): Observable<any> {
    return this.http.get(this.config.apiEndpoint + '/authenticate/google?role=' + role,
      { withCredentials: true })
      .map((response: Response) => response.json())
  }

}
