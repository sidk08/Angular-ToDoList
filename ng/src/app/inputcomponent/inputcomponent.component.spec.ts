import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcomponentComponent } from './inputcomponent.component';
import { ListManagerService} from '../list-manager.service';
import item 
describe('InputcomponentComponent', () => {
  let component: InputcomponentComponent;
  let fixture: ComponentFixture<InputcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
