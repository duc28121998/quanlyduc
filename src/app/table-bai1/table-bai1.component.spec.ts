import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBai1Component } from './table-bai1.component';

describe('TableBai1Component', () => {
  let component: TableBai1Component;
  let fixture: ComponentFixture<TableBai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
