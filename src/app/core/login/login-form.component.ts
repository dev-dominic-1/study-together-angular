import {Component} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import Grid from "../../interface/grid.component";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatRipple} from "@angular/material/core";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'login-form',
  imports: [
    FormsModule,
    Grid,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatIcon,
    MatSuffix,
    MatRipple,
    MatTabGroup,
    MatTab,
    MatButton
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.sass'
})
export class LoginFormComponent {

  tab: number = 0
  tabs: LoginFormTabs[] = [
    LoginFormTabs.EMAIL,
    LoginFormTabs.REGISTER,
    LoginFormTabs.PASSWORD,
    LoginFormTabs.PROFILE,
    LoginFormTabs.BIO
  ]
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        (control:AbstractControl): ValidationErrors | null => control.value === this.form?.value.password ? null : {'passwordMatch': true}
      ]
    }],
  })

  showPassword: boolean = false
  showConfirmPassword: boolean = false

  constructor(private fb: FormBuilder) {}

  tabIndex (tab: LoginFormTabs) {
    return this.tabs.findIndex(t => t === tab)
  }

  attemptSignIn () {
    this.tab = this.tabIndex(LoginFormTabs.PASSWORD)
  }

}

export enum LoginFormTabs {
  EMAIL = 'EMAIL',
  REGISTER = 'REGISTER',
  PASSWORD = 'PASSWORD',
  PROFILE = 'PROFILE',
  BIO = 'BIO'
}
