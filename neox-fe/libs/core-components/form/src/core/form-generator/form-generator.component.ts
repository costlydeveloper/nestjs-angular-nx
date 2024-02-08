import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  input,
  OnDestroy,
  OnInit,
  Output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { environmentGlobal } from '@team-link/config';
import { Subscription } from 'rxjs';
import { DEFAULT_FORM_LAYOUT } from '../../config/default-form-layout';
import {
  ColSpanItem,
  FormControlStatus,
  IDynamicFormControl,
  IFormCompactOutput,
  IFormLayout,
} from '../../dependencies';
import { DynamicFormControlComponent } from '../dynamic-form-control/dynamic-form-control.component';

@Component({
  selector: 'form-generator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFormControlComponent],
  templateUrl: './form-generator.component.html',
  styleUrl: './form-generator.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormGeneratorComponent implements OnInit, OnDestroy {
  // region *** Debug ***
  debug = input<boolean, boolean>(false, {
    transform: (value: boolean) =>
      environmentGlobal.production ? false : value,
  });
  // endregion

  // region *** I / O ***

  @Output() formGroupEmitter = new EventEmitter<FormGroup>();
  @Output() formCompactEmitter = new EventEmitter<IFormCompactOutput>();

  layoutConfig = input<IFormLayout, IFormLayout>(DEFAULT_FORM_LAYOUT, {
    transform: (value) => {
      return {
        ...DEFAULT_FORM_LAYOUT,
        ...value,
      };
    },
  });

  dynamicFormControls = input.required<
    IDynamicFormControl[],
    IDynamicFormControl[]
  >({
    transform: (value) => {
      this.setupFormFields(value);
      this.mapLayoutData();
      return value;
    },
  });

  //layoutData: [number | null, ColSpanItem, string?][][] = [];
  layoutData = signal<[number | null, ColSpanItem, string?][][]>([]);

  formOutput!: IFormCompactOutput;
  form!: FormGroup;
  subscriptions: Subscription = new Subscription();
  cd = inject(ChangeDetectorRef);
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.emmitFormOutput();
    this.formGroupEmitter.emit(this.form);
    this.subscriptions.add(
      this.form.valueChanges.subscribe(() => {
        this.formGroupEmitter.emit(this.form);
        this.emmitFormOutput();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  emmitFormOutput() {
    const status: FormControlStatus = this.form.status as FormControlStatus;
    this.formOutput = { status, value: this.form.value };
    this.formCompactEmitter.emit(this.formOutput);
  }
  setupFormFields(dynamicFormFields: IDynamicFormControl[]) {
    dynamicFormFields.forEach((formItem: IDynamicFormControl) => {
      const fieldValidators = formItem?.validators?.map(
        (validatorError) => validatorError.validator,
      );
      const formControl = this.fb.control(
        formItem.value || '',
        fieldValidators,
      );
      this.form.addControl(formItem.id, formControl);
    });
  }

  mapLayoutData() {
    if (this.layoutConfig().colSpan) {
      const rows = this.layoutConfig().colSpan!.length;
      let nestedIndex = -1; // used to match with index of dynamic form control list
      for (let i = 0; i < rows; i++) {
        this.layoutData.update((array) => [...array, []]); // creates clone with nested [] for further mapping
        this.layoutData()[i] = this.layoutConfig().colSpan![i].map((item) => {
          if (item.startsWith('empty-')) {
            // for empty annotation it adds thirds item for css
            return [null, item, item.replace('empty-', 'col-span-')];
          }
          nestedIndex++;
          return [nestedIndex, item];
        });
      }
    }
  }
}
