import { Component, OnInit } from '@angular/core';
//import { debug } from 'console';
import { AppService } from './app.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: string = 'Acme Product Management';

}
