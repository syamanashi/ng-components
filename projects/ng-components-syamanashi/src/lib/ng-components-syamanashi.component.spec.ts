import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentsSyamanashiComponent } from './ng-components-syamanashi.component';

describe('NgComponentsSyamanashiComponent', () => {
  let component: NgComponentsSyamanashiComponent;
  let fixture: ComponentFixture<NgComponentsSyamanashiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgComponentsSyamanashiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentsSyamanashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
