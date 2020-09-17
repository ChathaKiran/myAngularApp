import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegisterComponent } from './register/register.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListItemsComponent } from './list-items/list-items.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, CalculatorComponent, RegisterComponent, ListItemComponent, ListItemsComponent], //List all the components belonging to this module
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule], //for External Modules
  providers: [],
  bootstrap: [AppComponent] //This is the startup component of the application. Should have the selectos we use in index.html
})
export class AppModule { 
  

} //When the compiler finds a directive in template, it looks at the AppModule to check if the component is defined under it.
