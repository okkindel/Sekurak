import { Component, OnInit } from '@angular/core';
import { IElement } from '../../models/IElement';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

  constructor() { }

  mocklist: IElement[] = [
    { name: 'Sample Name 1', description: 'The very descripting desriptio ever is exacly here 1', rate: 5, id: 1 },
    { name: 'Sample Name 2', description: 'The very descripting desriptio ever is exacly here 2', rate: 4, id: 2 },
    { name: 'Sample Name 3', description: 'The very descripting desriptio ever is exacly here 3', rate: 3, id: 3 },
    { name: 'Sample Name 4', description: 'The very descripting desriptio ever is exacly here 4', rate: 2, id: 4 },
    { name: 'Sample Name 5', description: 'The very descripting desriptio ever is exacly here 5', rate: 5, id: 5 },
    { name: 'Sample Name 6', description: 'The very descripting desriptio ever is exacly here 6', rate: 3, id: 6 }
  ];

  ngOnInit() {
  }
}
