import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  entryForm: FormGroup;
  ngOnInit(): void {}

  constructor(
    private ngxSpinnerService: NgxSpinnerService,
    private authService: AuthService
  ) {
    this.entryForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      lastName: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      phone: new FormControl('', Validators.compose([Validators.required])),
      nationality: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      address: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
      confirmPassword: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.entryForm.controls;
  }
  async submit() {
    try {
      this.ngxSpinnerService.show();
      console.log(this.entryForm.value);
      const loginSubs = await this.authService
        .register(
          this.f['firstName'].value,
          this.f['lastName'].value,
          this.f['email'].value,
          this.f['phone'].value,
          this.f['nationality'].value,
          this.f['address'].value,
          this.f['confirmPassword'].value
        )
        .toPromise();
      Swal.fire({
        icon: 'success',
        title: 'True',
        text: 'Registration Successful',
        footer: '<a href="/auth/login">Proceed to Login</a>',
      });

      this.ngxSpinnerService.hide();
    } catch (err: any) {
      console.log(err);
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
