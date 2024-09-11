import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
        // this.router.navigate(['/login']);
        return
      }
    } else{
      // this.router.navigate(['/login']);
    }
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  ngOnInit() {
    
  }
}
