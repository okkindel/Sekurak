import { Component, OnInit } from '@angular/core';
import { IElement } from '../../models/IElement';
import { ListService } from '../../services/list.service';
import { SnackbarService } from 'src/app/shared/services';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

  constructor(private service: ListService, private snackBar: SnackbarService) { }

  list: IElement[] = [];

  ngOnInit() {
    this.service.list_items().subscribe(
      response => {
        this.list = response.list;
      },
      error => this.snackBar.showMessage(error.error.status || 'No server connection'));
  }
}
