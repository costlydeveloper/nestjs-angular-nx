/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { getTestTranslocoModule } from '@team-link/common';
import { DEFAULT_ERROR_MESSAGE } from '../../config/default-error-messages';
import { IErrorAssociation } from '../../dependencies';
import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let formGroupDirective: FormGroupDirective;

  const emailIsRequired: [string, string] = [
    'error.emailIsRequired',
    'Email is required',
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        getTestTranslocoModule({ [emailIsRequired[0]]: emailIsRequired[1] }),
        ErrorMessageComponent,
      ],
      providers: [
        {
          provide: FormGroupDirective,
          useValue: { control: new FormGroup({}) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    formGroupDirective = TestBed.inject(FormGroupDirective);

    // Simulate a form control
    const formControlConfig = {
      email: new FormControl('', [Validators.required]),
    };
    component.form = new FormGroup(formControlConfig);
    fixture.componentRef.setInput('formItem', {
      id: 'email',
      validators: [
        {
          validator: Validators.required,
          errorMessage: emailIsRequired[0],
          errorAssociation: IErrorAssociation.REQUIRED,
        },
      ],
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message when the form control is invalid', () => {
    component.form.controls['email'].markAsTouched();
    fixture.detectChanges();

    const errorMessage = component.getValidationErrorMessage(
      component.formItem(),
    );
    expect(errorMessage).toEqual(emailIsRequired[0]);
  });

  it('should display an error message in the HTML when the form control is invalid', () => {
    const controlName = 'email';

    if (!component.form.contains(controlName)) {
      component.form.addControl(controlName, new FormControl(''));
    }

    const control = component.form.get(controlName);
    control!.markAsDirty();

    fixture.detectChanges();
    const errorMessageElement =
      fixture.debugElement.nativeElement.querySelector(
        'span[data-qa="wrapper"]',
      );

    expect(errorMessageElement.textContent).toContain(emailIsRequired[1]);
  });

  it('should use default error message if custom message is not provided', () => {
    fixture.componentRef.setInput('formItem', {
      id: 'email',
      validators: [
        {
          validator: Validators.required,
          errorMessage: '',
          errorAssociation: IErrorAssociation.REQUIRED,
        },
      ],
    });

    const defaultMessage = component.mapDefaultMessage(
      IErrorAssociation.REQUIRED,
    );

    expect(defaultMessage).toEqual(DEFAULT_ERROR_MESSAGE.REQUIRED);
  });
});
*/
