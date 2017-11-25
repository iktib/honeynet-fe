/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { CoreModule } from './@core/core.module'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ThemeModule } from './@theme/theme.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AuthHttp, AuthConfig } from 'angular2-jwt'
import { Http, RequestOptions } from '@angular/http'
import { AuthModule } from './core/auth/auth.module'

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options)
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    AuthModule,
    
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
})
export class AppModule {
}
