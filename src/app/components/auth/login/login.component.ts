import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:any = ''
  password:any = ''

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public router: Router, 
  ){
    const token = localStorage.getItem('token')
    if (token) {
      if (this.tokenExpired(token)) {
        console.log('vencido');
        localStorage.removeItem('token')
        return
      } else{
        // this.router.navigate(['/home']);
      }
    }
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  ngOnInit(){

  }
  login() {
    if(this.password && this.email) {
      this.http.post(`${environment.apiUrl}/auth/login`, {xemail: this.email, xcontrasena: this.password}).pipe(first()).subscribe({
        next: (data:any) => {
          console.log(data);
          localStorage.setItem('cusuario', data.data.cusuario)
          localStorage.setItem('token', data.data.token)
          alert('Usuario autentificado.')

          let returnUrl = ''
          returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
          this.router.navigate(['/home']);
          
          // get return url from route parameters or default to '/'

          
      },
      error: (err) => {
        alert(err.error.message)
        console.log(err.error);
      },
      })
    }
  }
}
