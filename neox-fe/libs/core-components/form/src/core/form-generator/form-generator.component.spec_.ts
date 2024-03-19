import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { getTestTranslocoModule } from '@team-link/common';
import { InputType } from '../../controls';
import {
  DynamicControlTypeEnum,
  IDynamicFormControl,
  IErrorAssociation,
  IFormLayout,
} from '../../dependencies';
import { DynamicFormControlComponent } from '../dynamic-form-control/dynamic-form-control.component';
import { FormGeneratorComponent } from './form-generator.component';

describe('FormGeneratorComponent', () => {
  let component: FormGeneratorComponent;
  let fixture: ComponentFixture<FormGeneratorComponent>;

  const layoutConfig: IFormLayout = {
    girdCols: 12,
    gap: 5,
    colSpan: [
      ['col-span-2', 'empty-1', 'col-span-9'],
      ['col-span-5', 'empty-2', 'col-span-5'],
    ],
  };

  const formConfig: IDynamicFormControl[] = [];

  for (let i = 0; i <= 4; i++) {
    formConfig.push({
      id: 'email' + i,
      label: {
        name: 'auth.label.email',
      },
      placeholder: 'auth.placeholder.email',
      titleAtt: 'auth.placeholder.email',
      type: DynamicControlTypeEnum.INPUT_TEXT,
      controlConfig: {
        inputType: InputType.EMAIL,
      },
      validators: [
        {
          validator: Validators.required,
          errorAssociation: IErrorAssociation.REQUIRED,
        },
      ],
    });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormGeneratorComponent,
        DynamicFormControlComponent,
        getTestTranslocoModule(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGeneratorComponent);
    fixture.componentRef.setInput('dynamicFormControls', formConfig);
    fixture.componentRef.setInput('layoutConfig', layoutConfig);

    component = fixture.componentInstance;
    component.mapLayoutData();
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form group and emit it', () => {
    expect(component.form).toBeDefined();
  });

  it('should initialize form controls as per the configuration and check validity', () => {
    const emailControl = component.form.get('email1');
    expect(emailControl).toBeTruthy();
    expect(emailControl!.valid).toBeFalsy();

    emailControl!.setValue('test@example.com');
    expect(emailControl!.valid).toBeTruthy();
  });

  it('should emit form group on value changes', () => {
    jest.spyOn(component.formGroupEmitter, 'emit');

    const emailControl = component.form.get('email1');
    emailControl!.setValue('test@example.com');

    expect(component.formGroupEmitter.emit).toHaveBeenCalledWith(
      component.form,
    );
  });

  it('should correctly generate layout data based on the provided layout configuration', () => {
    const expectedLayoutData = [
      [
        [0, 'col-span-2'],
        [null, 'empty-1', 'col-span-1'],
        [1, 'col-span-9'],
      ],
      [
        [2, 'col-span-5'],
        [null, 'empty-2', 'col-span-2'],
        [3, 'col-span-5'],
      ],
    ];
    expect(component.layoutData()).toEqual(expectedLayoutData);
  });

  it('should correctly generate and render layout in the DOM based on the provided layout configuration', () => {
    const rows = fixture.debugElement.queryAll(By.css('.grid'));
    expect(rows.length).toEqual(2);

    // Provera za prvi red
    const firstRowCols = rows[0].queryAll(
      By.css('.col-span-2, .col-span-1, .col-span-9'),
    );
    expect(firstRowCols.length).toEqual(3);

    // Provera za drugi red
    const secondRowCols = rows[1].queryAll(
      By.css('.col-span-5, .col-span-2, .col-span-5'),
    );
    expect(secondRowCols.length).toEqual(3);
  });
});
