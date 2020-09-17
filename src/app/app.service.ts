import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private listItem = new BehaviorSubject(null);
  listItemObservable = this.listItem.asObservable();

  private listItems = new BehaviorSubject([] as string[]);
  listItemsObservable = this.listItems.asObservable();

  updateListItem(_listItem: string) {
    this.listItem.next(_listItem);
  }

  updateListItems(_listItems: string[]) {
    this.listItems.next(_listItems);
  }
}
