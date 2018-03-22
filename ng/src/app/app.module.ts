;
import { DispcompComponent } from './dispcomp/dispcomp.component';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListManagerService} from './list-manager.service';


import { AppComponent } from './app.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
// import { [inputcomponent]Component } from './[inputcomponent]/[inputcomponent].component';


@NgModule({
  declarations: [
    AppComponent,
    InputcomponentComponent,
    HeadercomponentComponent, 
    DispcompComponent, FootercomponentComponent
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
