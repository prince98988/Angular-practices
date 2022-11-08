import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormMuduleComponent } from './reactive-form-mudule.component';

describe('ReactiveFormMuduleComponent', () => {
  let component: ReactiveFormMuduleComponent;
  let fixture: ComponentFixture<ReactiveFormMuduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormMuduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormMuduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
