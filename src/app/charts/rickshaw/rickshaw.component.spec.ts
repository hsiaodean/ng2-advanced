/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RickshawComponent } from './rickshaw.component';

describe('RickshawComponent', () => {
  let component: RickshawComponent;
  let fixture: ComponentFixture<RickshawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickshawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickshawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
