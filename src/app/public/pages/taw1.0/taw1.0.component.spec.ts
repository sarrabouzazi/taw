import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taw10Component } from './taw1.0.component';

describe('Taw10Component', () => {
  let component: Taw10Component;
  let fixture: ComponentFixture<Taw10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Taw10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taw10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
