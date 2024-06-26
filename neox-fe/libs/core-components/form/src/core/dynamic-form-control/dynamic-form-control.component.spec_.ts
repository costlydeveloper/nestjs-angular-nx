/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { getTestTranslocoModule } from '@team-link/common';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { InputTextComponent } from '../../controls/input-text/input-text.component';
import { DynamicControlTypeEnum } from '../../dependencies';
import { DynamicFormControlComponent } from './dynamic-form-control.component';

class MockFormGroupDirective extends FormGroupDirective {
  constructor() {
    super([], []);
    this.form = new FormGroup({
      testControl: new FormControl(''),
    });
  }
}

@Component({
  selector: 'ui-smooth-expansion',
  template: '<ng-content></ng-content>',
})
class MockSmoothExpansionComponent {
  @Input() expand: boolean | undefined;
  @Input() durationExpand = '.5';
  @Input() durationCollapse = '.2';
}

describe('DynamicFormControlComponent', () => {
  let component: DynamicFormControlComponent;
  let fixture: ComponentFixture<DynamicFormControlComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        MockSmoothExpansionComponent,
        CommonModule,
        ReactiveFormsModule,
        DynamicFormControlComponent,
        ErrorMessageComponent,
        InputTextComponent,
        getTestTranslocoModule(),
      ],
      providers: [
        { provide: FormGroupDirective, useClass: MockFormGroupDirective },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormControlComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('dynamicFormControl', {
      id: 'testControl',
      type: DynamicControlTypeEnum.INPUT_TEXT,
    });

    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display InputTextComponent for INPUT_TEXT type', async () => {
    fixture.componentRef.setInput('dynamicFormControl', {
      id: 'testControl',
      type: DynamicControlTypeEnum.INPUT_TEXT,
    });

    fixture.detectChanges();
    await fixture.whenStable();

    const inputTextComponent = fixture.debugElement.query(
      By.directive(InputTextComponent),
    );
    expect(inputTextComponent).not.toBeNull();
  });
});
*/
