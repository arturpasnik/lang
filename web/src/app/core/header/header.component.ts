import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {

  }

	isAuthenticated() {
		return this.authService.isAuthenticated();
	}
}
