import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {item} from './listitem';
import {initItems} from './initial-list';


@Injectable()
export class ListManagerService {

  list: item[];

  @Output() newItem: EventEmitter<item> = new EventEmitter();

  constructor() {
    this.list = initItems;
   }

  getList():Observable<item[]> {
    return of(initItems);
  }

  // addItem(item):Observable<boolean>{
    addItem(newvalue: String){
    let  nitem: item = new item();
    nitem.value = newvalue;
    nitem.id = this.list.length-1;
    nitem.status = false;  
    this.list.push(nitem);
    // this.newItem.emit(nitem);
    // return of(true);
  }

  removeItem(rmItem: item):Observable<boolean>{
    this.list.splice(rmItem.id,1);
    return of(true);
  }

  setList(upList: item[]): void{
    this.list = upList;
  }
}
