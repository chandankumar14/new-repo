import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAndMapComponent } from './from-and-map.component';

describe('FromAndMapComponent', () => {
  let component: FromAndMapComponent;
  let fixture: ComponentFixture<FromAndMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAndMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAndMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
