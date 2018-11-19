import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { ThemesModule } from '../themes';
import { ListComponent, ContainerComponent } from './containers';
import { ElementComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ThemesModule,
    RouterModule
  ],
  declarations: [ListComponent, ContainerComponent, ElementComponent],
  exports: [ListComponent]
})
export class ListModule { }
