import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
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
  IDynamicFormControl,
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
  _debug = false;
  @Input({ required: false })
  set debug(val: boolean) {
    if (environmentGlobal.production) {
      this._debug = false;
    } else {
      this._debug = val;
    }
  }
  get debug() {
    return this._debug;
  }
  // endregion

  // region *** I / O ***

  @Output() formEmitter = new EventEmitter<FormGroup>();

  _layoutConfig: IFormLayout = DEFAULT_FORM_LAYOUT;
  @Input({ required: false })
  set layoutConfig(val: IFormLayout) {
    this._layoutConfig = {
      ...DEFAULT_FORM_LAYOUT,
      ...val,
    };
  }
  get layoutConfig() {
    return this._layoutConfig;
  }

  _dynamicFormControls!: IDynamicFormControl[];
  @Input({ required: true })
  set dynamicFormControls(val: IDynamicFormControl[]) {
    this._dynamicFormControls = val;
    this.setupFormFields(val);
    this.mapLayoutData();
  }
  get dynamicFormControls() {
    return this._dynamicFormControls;
  }
  // endregion

  layoutData: [number | null, ColSpanItem, string?][][] = [];

  form!: FormGroup;
  subscriptions: Subscription = new Subscription();
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.form.valueChanges.subscribe(() => {
        this.formEmitter.emit(this.form);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setupFormFields(dynamicFormFields: IDynamicFormControl[]) {
    dynamicFormFields.forEach((formItem: IDynamicFormControl) => {
      const fieldValidators = formItem?.validators?.map(
        (validatorError) => validatorError.validator
      );
      const formControl = this.fb.control(
        formItem.value || '',
        fieldValidators
      );
      this.form.addControl(formItem.id, formControl);
    });
  }

  mapLayoutData() {
    if (this.layoutConfig.colSpan) {
      const rows = this.layoutConfig.colSpan.length;
      let nestedIndex = -1; // used to match with index of dynamic form control list
      for (let i = 0; i < rows; i++) {
        this.layoutData.push([]); // creates clone with nested [] for further mapping
        this.layoutData[i] = this.layoutConfig.colSpan[i].map((item) => {
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
