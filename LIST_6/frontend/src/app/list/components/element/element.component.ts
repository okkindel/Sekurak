import { Component, OnInit, Input } from '@angular/core';
import { IElement } from '../../models/IElement';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  @Input() data: IElement;

  constructor() { }

  ngOnInit() {
  }

  stars(n: number): any[] {
    return Array(n);
  }

}
