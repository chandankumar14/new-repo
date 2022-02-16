import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIDesignComponent } from './ui-design.component';

describe('UIDesignComponent', () => {
  let component: UIDesignComponent;
  let fixture: ComponentFixture<UIDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
