import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.componet';
import { HiComponent } from './components/hi/hi.component';

@NgModule({ // @Decorator => nhận vào meta data
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent
    // khai báo các component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
