import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

export interface ISignInFormOutput {
  username: string;
  password: string;
}

@Component({
  selector: 'auth-form-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-sign-in.component.html',
  styleUrl: './form-sign-in.component.scss',
})
export class FormSignInComponent implements OnInit {
  @Output() output = new EventEmitter<ISignInFormOutput>();

  // form!: FormGroup<ISignInForm>;

  form = this.fb.group({
    username: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
