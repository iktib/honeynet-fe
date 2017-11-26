import { Component, OnDestroy, OnInit } from '@angular/core'
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme'

import { UserService } from '../../../@core/data/users.service'

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit, OnDestroy {

  contacts: any[]
  recent: any[]
  breakpoint: NbMediaBreakpoint
  breakpoints: any
  themeSubscription: any

  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = breakpointService.getBreakpointsMap()
    this.themeSubscription = themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue
      })
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [
          {user: users.max, type: 'mobile'},
          {user: users.ura, type: 'home'},
          {user: users.vova, type: 'mobile'}
        ]

        this.recent = [
          {user: users.max, type: 'home', time: '9:12 pm'},
          {user: users.ura, type: 'home', time: '7:45 pm'},
          {user: users.vova, type: 'mobile', time: '5:29 pm'}
        ]
      })
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe()
  }
}
