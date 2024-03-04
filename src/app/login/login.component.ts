import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string
  password?: string
  constructor(username?: string) {
    this.username = username ?? '';
  }

  signIn () {
    console.log('SIGN IN', this.username, this.password)
  }
}
