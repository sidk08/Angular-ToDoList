import { Component, OnInit } from '@angular/core';
import {item} from '../listitem';
import { ListManagerService} from '../list-manager.service';
import { DispcompComponent} from '../dispcomp/dispcomp.component';

@Component({
  selector: 'app-inputcomponent',
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.css']
})
export class InputcomponentComponent implements OnInit {

  constructor(private listManage:ListManagerService) { }

  ngOnInit() {
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.DispcompComponent.addItem({ name } as item);
}
}
