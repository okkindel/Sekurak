import { Component, OnInit, HostBinding } from '@angular/core';
import * as fromThemes from './state/themes/reducers';
import { Store, select } from '@ngrx/store';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Themes } from './themes/models/themes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') componentCssClass;

  constructor(
    private store: Store<fromThemes.IState>,
    public overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    const state = (this.store.pipe(select(fromThemes.getTheme)));
    state.subscribe(data => this.changeColors(data));
  }

  changeColors(theme) {
    Object.keys(Themes).forEach(item => {
      this.overlayContainer.getContainerElement().classList.remove(Themes[item]);
    });
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
