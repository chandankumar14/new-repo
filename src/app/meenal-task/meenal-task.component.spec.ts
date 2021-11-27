import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeenalTaskComponent } from './meenal-task.component';

describe('MeenalTaskComponent', () => {
  let component: MeenalTaskComponent;
  let fixture: ComponentFixture<MeenalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeenalTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeenalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
