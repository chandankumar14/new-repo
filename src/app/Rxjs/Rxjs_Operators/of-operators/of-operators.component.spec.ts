import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OFOperatorsComponent } from './of-operators.component';

describe('OFOperatorsComponent', () => {
  let component: OFOperatorsComponent;
  let fixture: ComponentFixture<OFOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OFOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OFOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
