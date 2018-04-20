import {User} from '../shared/model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService
{

	private token: string = null;

	constructor(private http: HttpClient, private router: Router){
		this.token = localStorage.getItem('appToken');
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
			(token:any) => {
				this.setToken(token.token);
				localStorage.setItem('appToken', token.token);
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
		return '';
	}

	refreshToken(): Observable<string> {
		/*
				The call that goes in here will use the existing refresh token to call
				a method on the oAuth server (usually called refreshToken) to get a new
				authorization token for the API calls.
		*/
		let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
		this.http.get('http://lang.local/api/user/refreshToken',{headers: headers}).subscribe(
			(newToken:any) => {
				this.setToken(newToken.token);
				localStorage.setItem('appToken', newToken.token);
			}
		);
		return Observable.of(this.getToken()).delay(200);

	}

	logout(){
		this.setToken('');
		localStorage.removeItem('appToken');
		this.router.navigate(['/login']);
	}
}