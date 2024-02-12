import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { getTestTranslocoModule } from '@team-link/test';
import { DynamicControlTypeEnum } from '../../dependencies';
import { ValueAccessorDirective } from '../../dependencies/value-accessor.directive';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;
  const placeholder = 'Enter text';
  const titleAtt = 'Title';
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputTextComponent,
        FormsModule,
        getTestTranslocoModule({
          placeholder: placeholder,
          titleAtt: titleAtt,
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA], // ignore fc-label
      providers: [
        {
          provide: ValueAccessorDirective,
          useValue: { value: jest.fn() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    component.config = {
      id: '112321310',
      type: DynamicControlTypeEnum.INPUT_TEXT,
      controlConfig: { inputType: 'text' },
      readonly: false,
      disabled: false,
      titleAtt: 'titleAtt',
      placeholder: 'placeholder',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input with correct attributes', () => {
    const inputElement = fixture.debugElement.query(
      By.css('input'),
    ).nativeElement;
    expect(inputElement.type).toEqual('text');
    expect(inputElement.readOnly).toBeFalsy();
    expect(inputElement.disabled).toBeFalsy();
    expect(inputElement.placeholder).toEqual(placeholder);
  });
});
