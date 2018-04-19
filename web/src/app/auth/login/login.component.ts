import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@ViewChild('f') loginForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
