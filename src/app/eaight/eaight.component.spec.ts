import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaightComponent } from './eaight.component';

describe('EaightComponent', () => {
  let component: EaightComponent;
  let fixture: ComponentFixture<EaightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
