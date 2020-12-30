import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../domain/services/user.service';

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
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    this.isLogged = this.userService.login(username, password);
    if (this.isLogged) {
      this.router.navigate(['/admin']);
    }
  }

}
