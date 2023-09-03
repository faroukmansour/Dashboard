import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/service/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name!: string;
  lastname!: string;
  constructor(private authService: ClientService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.name, this.lastname).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful');
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }

}
