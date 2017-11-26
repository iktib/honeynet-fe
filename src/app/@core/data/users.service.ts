import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

let counter = 0

@Injectable()
export class UserService {

  private users = {
    max: { name: 'Max Kobilev', picture: 'assets/images/nick.png' },
    ura: { name: 'Ura Mishin', picture: 'assets/images/eva.png' },
    vova: { name: 'Vova Denisov', picture: 'assets/images/jack.png' }
  }

  private userArray: any[]

  constructor() {
    // this.userArray = Object.values(this.users)
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users)
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray)
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length
    return Observable.of(this.userArray[counter])
  }
}
