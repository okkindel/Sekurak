import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {

  @Input() username: string;
  @Output() logout = new EventEmitter;
  @Output() account = new EventEmitter;

  constructor() { }
}
