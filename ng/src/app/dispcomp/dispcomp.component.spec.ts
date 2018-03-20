import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispcompComponent } from './dispcomp.component';

describe('DispcompComponent', () => {
  let component: DispcompComponent;
  let fixture: ComponentFixture<DispcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
