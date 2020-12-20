import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/domain/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  isLogged: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    this.isLogged = this.userService.login(username, password);
    if (this.isLogged) {
      console.log('user logged');
    }
  }

}
