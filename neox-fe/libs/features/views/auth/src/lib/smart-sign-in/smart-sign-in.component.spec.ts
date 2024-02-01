import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSignInComponent } from './smart-sign-in.component';

describe('SmartSignInComponent', () => {
  let component: SmartSignInComponent;
  let fixture: ComponentFixture<SmartSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
