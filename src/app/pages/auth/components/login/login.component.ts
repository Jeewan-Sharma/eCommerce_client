import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  entryForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService
  ) {
    this.entryForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ])
      ),
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.entryForm.controls;
  }
  ngOnInit() {}

  async submit() {
    try {
      this.ngxSpinnerService.show();

      console.log(this.entryForm.value);
      const response = await this.authService
        .login(this.f['email'].value, this.f['password'].value)
        .toPromise();

      if (response.token) {
        localStorage.setItem('myAppToken', response.token);
        this.router.navigate(['/home']);
        this.ngxSpinnerService.hide();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
        this.ngxSpinnerService.hide();
      }
    } catch (err: any) {
      console.log(err.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message,
        footer: '<a href="">Why do I have this issue?</a>',
      });
      this.ngxSpinnerService.hide();
    }
  }
}
