import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent, QuestDetailsComponent } from './containers';
import { ThemesModule } from '../themes';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [AddTaskComponent, QuestDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ThemesModule
  ],
  exports: [AddTaskComponent, QuestDetailsComponent]
})
export class QuestModule { }
