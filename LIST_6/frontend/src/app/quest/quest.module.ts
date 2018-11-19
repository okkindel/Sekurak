import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent, QuestDetailsComponent } from './containers';
import { ThemesModule } from '../themes';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AddTaskComponent, QuestDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ThemesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [AddTaskComponent, QuestDetailsComponent]
})
export class QuestModule { }
