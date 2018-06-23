import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgComponentsSyamanashiModule } from 'ng-components-syamanashi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgComponentsSyamanashiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
