import { Injectable } from '@angular/core';
import {item} from './listitem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ListManagerService {

  list: item[];

  constructor() { }

  // getList(): Observable<item[]> {
  //   return of(this.list);
  // }
  getList(): item[] {
    return this.list;
  }

  getFromFile(): void{

  }

  addItem(item):void{
    this.list.push(item);
  }

  // removeItem(item):void{
  //   this.list.
  // }


}
