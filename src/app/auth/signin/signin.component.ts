import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  userDetails: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  onSignIn() {
    this.authService.signin(this.userDetails).subscribe({
      next: (response: any) => {
        this.router.navigate(['/tasks']);
        localStorage.setItem('userId', response.id);
      },
      error: (error: any) => {
        console.error('Error signing in', error);
      }
    });
  }
}
