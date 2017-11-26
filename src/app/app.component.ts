/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnInit } from '@angular/core'
import { JwtHelper } from 'angular2-jwt'

@Component({
  selector: 'ngx-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    // 
  }

  jwtHelper: JwtHelper = new JwtHelper()

  useJwtHelper() {
    const token = localStorage.getItem('token')

    if (token) {
      
    }

    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    )
  }
}
