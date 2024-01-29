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
import { IDynamicFormControl } from '../../dependencies';
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
  @Output() formEmitter = new EventEmitter<FormGroup>();
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
  _dynamicFormControls!: IDynamicFormControl[];
  @Input({ required: true })
  set dynamicFormControls(val: IDynamicFormControl[]) {
    this._dynamicFormControls = val;
    this.setupFormFields(val);
  }
  get dynamicFormControls() {
    return this._dynamicFormControls;
  }

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
}
