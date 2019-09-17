import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //List all the components belonging to this module
  imports: [BrowserModule], //for External Modules
  providers: [],
  bootstrap: [AppComponent] //This is the startup component of the application. Should have the selectos we use in index.html
})
export class AppModule { } //When the compiler finds a directive in template, it looks at the AppModule to check if the component is defined under it.
