import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberComponent } from './number.component';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
