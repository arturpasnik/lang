import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../shared/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

	@ViewChild('f') registerForm: NgForm;

	default = {
	  gender: 'male'
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
		const user = new User(null, this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password);
		this.authService.register(user);
  }

}
