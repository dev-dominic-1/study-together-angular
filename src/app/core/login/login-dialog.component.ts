import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import Grid from "../../interface/grid.component";
import {GridSpacer} from "../../interface/grid-spacer.component";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {LoginFormComponent, LoginFormTabs} from "./login-form.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, MatFormField, MatLabel, MatInput, MatError, ReactiveFormsModule, MatButton, Grid, GridSpacer, MatDialogContent, MatDialogTitle, MatDialogActions, FormsModule, LoginFormComponent, MatIconButton, MatIcon],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.sass',
})
export class LoginDialogComponent {
  @Input({required: true}) successCallback!: Function
  @Output() onSuccess: EventEmitter<any> = new EventEmitter()
  @Output() onClickClose: EventEmitter<any> = new EventEmitter()
  @Output() onClickBack: EventEmitter<{formRef: LoginFormComponent, fromTab: LoginFormTabs}> = new EventEmitter()

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  showPassword: boolean = true

  constructor(private fb: FormBuilder) {}

  close () {
    this.onClickClose.emit()
  }

  attemptSignIn () {
    console.log('ATTEMPT SIGN IN')
    this.form.markAllAsTouched()
    if (!this.form.invalid) this.onSuccess.emit(this.form.value)
  }

  protected readonly LoginFormTabs = LoginFormTabs;
}
