;
import { DispcompComponent } from './dispcomp/dispcomp.component';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListManagerService} from './list-manager.service';


import { AppComponent } from './app.component';
// import { [inputcomponent]Component } from './[inputcomponent]/[inputcomponent].component';


@NgModule({
  declarations: [
    AppComponent,
    InputcomponentComponent, 
    DispcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
