;
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component'import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { [inputcomponent]Component } from './[inputcomponent]/[inputcomponent].component';


@NgModule({
  declarations: [
    AppComponent,
    [inputcomponent]Component, InputcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
