import {User} from '../shared/model/user.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService
{

	private token: string = null;

	constructor(private http: HttpClient, private router: Router){

	}

	isAuthenticated(){
		return this.token != null;
	}

	register(user: User){
		this.http.post('http://lang.local/api/user/register',user).subscribe(
			(token:string) => {
				this.setToken(token);
				this.router.navigate(['/']);
			},
			(error:any) => {
				console.log(error);
			}
		);
	}

	login(email: string, password: string){
		this.http.post('http://lang.local/api/user/login', {email: email, password: password}).subscribe(
			(token:string) => {
				this.setToken(token);
				this.router.navigate(['/']);
			},
			(error:any) => {
				console.log(error);
			}
		);
	}

	setToken(token: string){
		this.token = token;
	}

	getToken(){
		if(this.token){
			return this.token;
		}
		return false;
	}
}