import { Component } from '@angular/core'
import { LocalDataSource } from 'ng2-smart-table'
import { SmartTableService } from './../../@core/data/smart-table.service'

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      ip: {
        title: 'Ip',
        type: 'string',
      },
      port: {
        title: 'Port',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'number',
      },
    },
  }

  source: LocalDataSource = new LocalDataSource()

  constructor(
    private service: SmartTableService
  ) {
    const data = this.service.getData()
    this.source.load(data)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve()
    } else {
      event.confirm.reject()
    }
  }

}
