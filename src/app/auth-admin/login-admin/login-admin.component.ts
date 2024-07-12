import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent implements OnInit{
  usuario: string='';
  password: string='';
  errorMessage: string | null=null;
  successMessage:string|null=null;

  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  loginWithGoogle() {
    this.authService.loginWithGoogle().subscribe(
      (response) => {
        console.log('Inicio de sesión con Google exitoso:', response);
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        console.error('Error al iniciar sesión con Google:', error);
      }
    );
  }
}
