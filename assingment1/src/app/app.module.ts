import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessfulMessageComponent } from './successful-message/successful-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessfulMessageComponent,
    WarningMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
