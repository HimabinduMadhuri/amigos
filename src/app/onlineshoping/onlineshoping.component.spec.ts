import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineshopingComponent } from './onlineshoping.component';

describe('OnlineshopingComponent', () => {
  let component: OnlineshopingComponent;
  let fixture: ComponentFixture<OnlineshopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineshopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineshopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
