import { Injectable } from '@angular/core'

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    name: 'Web Auth',
    description: 'Fake Auth page',
    ip: '52.59.188.37',
    port: '8000',
    status: 'ok',
  }
  ]

  getData() {
    return this.data
  }
}
