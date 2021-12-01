import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeenalDemoComponent } from './meenal-demo.component';

describe('MeenalDemoComponent', () => {
  let component: MeenalDemoComponent;
  let fixture: ComponentFixture<MeenalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeenalDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeenalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
