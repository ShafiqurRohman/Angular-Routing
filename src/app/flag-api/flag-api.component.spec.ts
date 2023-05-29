import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagAPIComponent } from './flag-api.component';

describe('FlagAPIComponent', () => {
  let component: FlagAPIComponent;
  let fixture: ComponentFixture<FlagAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
