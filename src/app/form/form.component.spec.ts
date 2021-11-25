import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("reactive form testing", ()=>{
    let expected = {
      firstName:null,
      lastName:null,
      Age:null,
      email:null
    }
    component.ngOnInit()
    expect(component.form).toBeTrue()
    expect(component.form.value).toEqual(expected)
  })
});
