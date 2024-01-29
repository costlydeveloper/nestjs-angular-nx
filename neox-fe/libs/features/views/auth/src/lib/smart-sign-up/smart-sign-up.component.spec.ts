import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSignUpComponent } from './smart-sign-up.component';

describe('SmartSignUpComponent', () => {
  let component: SmartSignUpComponent;
  let fixture: ComponentFixture<SmartSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartSignUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
