import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

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
    private http: HttpClient
  ){}

  login() {
    if(this.password && this.email) {
      this.http.post(`${environment.apiUrl}/login`, {}).subscribe((data:any) => {
        console.log(data);
      })
    }
  }
}
