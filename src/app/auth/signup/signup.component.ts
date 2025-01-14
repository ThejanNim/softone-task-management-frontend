import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userDetails: any = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSignUp() {
    this.authService.signup(
      this.userDetails
    ).subscribe(
      (response: any) => {
        this.router.navigate(['/signin']);
      },
      (error: any) => {
        console.error("Error signing up", error);
      }
    );
  }
}
