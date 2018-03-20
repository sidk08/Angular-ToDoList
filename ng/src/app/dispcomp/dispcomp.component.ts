import { Component, OnInit } from '@angular/core';
import {item} from '../listitem';
import {ListManagerService} from '../list-manager.service';

@Component({
  selector: 'app-dispcomp',
  templateUrl: './dispcomp.component.html',
  styleUrls: ['./dispcomp.component.css']
})
export class DispcompComponent implements OnInit {

  listItems : item[];

  constructor(private listManage: ListManagerService) { 

  }

  ngOnInit() {
  }

  getList(): void {
    this.listItems = this.listManage.getList();
    // this.listManage.getList()
    // .subscribe(list=> this.listItems = list);
  }

}
