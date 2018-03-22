import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {item} from './listitem';
import {initItems} from './initial-list';


@Injectable()
export class ListManagerService {

  list: item[];

  constructor() {
    this.list = initItems;
   }

  getList():Observable<item[]> {
    return of(initItems);
  }

  addItem(item):void{
    this.list.push(item);
  }

  removeItem(rmItem: item):boolean{
    this.list.splice(rmItem.id,1);
    return true;
  }
}
