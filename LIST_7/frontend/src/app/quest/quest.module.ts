import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent, QuestDetailsComponent } from './containers';
import { ThemesModule } from '../themes';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SummaryComponent } from './containers/summary/summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddTaskComponent, QuestDetailsComponent, SummaryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ThemesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule
  ],
  exports: [AddTaskComponent, QuestDetailsComponent]
})
export class QuestModule { }
