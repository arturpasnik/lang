import {User} from './model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class UserService
{
	private user: User;

	constructor(private http: HttpClient, private authService: AuthService){
		this.getCurrentUser();
	}

	getCurrentUser(){
		let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
		this.http.get('http://lang.local/api/user',{headers: headers}).subscribe(
			(user:any) => {
				this.user = user;
			},
			(error:any) => {
				console.log(error);
			}
		);
	}
}