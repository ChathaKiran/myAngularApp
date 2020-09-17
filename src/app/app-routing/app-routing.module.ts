import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from '../list-item/list-item.component';
import { ListItemsComponent } from '../list-items/list-items.component';

const routes: Routes = [
  {
      path: 'list-item',
      component: ListItemComponent,
  },
  {
    path: 'list-items',
    component: ListItemsComponent,
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]  
})
export class AppRoutingModule { }
