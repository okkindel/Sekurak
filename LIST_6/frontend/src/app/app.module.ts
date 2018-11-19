import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StateModule } from './state/state.module';
import { MaterialModule } from './material';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth';
import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { QuestModule } from './quest/quest.module';
import { BadRequestComponent, InfoComponent } from './shared/containers';
import { ThemesModule } from './themes';
import { PasswordResetComponent } from './shared/containers/password-reset/password-reset.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BadRequestComponent,
    PasswordResetComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AuthModule,
    StateModule,
    ListModule,
    ToolbarModule,
    QuestModule,
    ThemesModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  exports: [
    InfoComponent,
    BadRequestComponent
  ]
})
export class AppModule { }
