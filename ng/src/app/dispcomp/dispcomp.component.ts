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
    // this.getList();
  }

  ngOnInit() {
    this.getList();
    // this.listManage.newItem.subscribe(nitem => {this.listItems.push(nitem);
    //                                               this.updateIds();});
  }

  getList(): void {
    // this.listItems = this.listManage.getList();
    this.listManage.getList()
    .subscribe(list=> this.listItems = list);
    this.listItems.sort(function(x,y){return Number(y.status)-Number(x.status);});
    this.updateIds();
  }

  // addItem(newItem: item): void{

  //   // this.listManage.addItem(newItem)
  //   // .subscribe(resp => { if(resp === true){
  //   //                       this.listItems.push(newItem);
  //   //                       this.updateIds();  } });
  //   // this.listManage.addItem(newItem)
  //   // .subscribe(resp => { if(resp === true){
  //   //                       this.listItems.push(newItem);
  //   //                       this.updateIds();  } });  

  //   // this.listItems.push(newItem);
  //   // this.updateIds();
  // }

  done(dItem: item): void{
    
  }

  remove(rmItem:item): void{
      this.listManage.removeItem(rmItem)
      .subscribe(data => {if(data === true){this.updateIds(); }}
  );
    this.listItems.sort(function(x,y){return Number(y.status)-Number(x.status);});
  }

  updateIds():void{
    // var eachItem : item;
    var x;
    for(x in this.listItems){
      this.listItems[x].id = x;
    }
    this.listItems.sort(function(x,y){return Number(y.status)-Number(x.status);});
    this.listManage.setList(this.listItems);
  }

}
