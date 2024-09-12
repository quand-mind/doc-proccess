import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menu:any = []
  angle:any = 360
  width:any = 100
  showMenu:any = false
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
    this.http.get(`${environment.apiUrl}/system/get`).subscribe((data:any) => {
      console.log(data);
      
      this.menu = data.data
      this.angle = this.angle / data.data.length
      if(data.data.length % 2 == 0) {
        this.width = this.width / (data.data.length)
      } else {
        this.width = this.width / ((data.data.length - 1))
      }
      // data.data.forEach((item:any) => {
        
      //   this.http.get(`${item.ximagenurl}`).subscribe((data:any) => {

      //   });
      // })
    })
  }
}
