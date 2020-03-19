import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../share/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vars } from '../../config/vars.config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  emailPattern: any = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  createFormGroup() {
    return new FormGroup({
      emails: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      passwords: new FormControl('', [Validators.required]),
    });
  }

  createFormGroup2() {
    return new FormGroup({
      usernamer: new FormControl('', [Validators.required]),
      emailr: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      passwordr: new FormControl('', [Validators.required]),
    });
  }

  singForm: FormGroup;
  registerForm: FormGroup;
  urlimage: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuZfNgsoQy6_mFR7rZ02z1grXiL8zFYzlevcxkO59PzSInG5g&s';

  constructor(private router: Router,
    private authService: AuthService) {
    this.singForm = this.createFormGroup();
    this.registerForm = this.createFormGroup2();
  }

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


  ngOnInit() {
  }

  resetSign() {
    this.singForm.reset();
  }

  resetregisterForm() {
    this.registerForm.reset();
  }

  login(): void {
    console.log(this.singForm.value.emails);
    if (this.singForm.valid) {
      this.authService.doLogin(this.singForm.value).then(res => {
        if(this.singForm.value.emails === Vars.adminEmail){
          this.router.navigate(['/adminperfil']);
        }else{
          this.router.navigate(['/perfil']);
        }
        this.resetSign();
      }).catch(error => { console.log(error); })
    }
  }

  register(): void {
    if (this.registerForm.valid) {
      this.authService.doRegister(this.registerForm.value, this.urlimage).then(res => {
        this.resetregisterForm();
        this.router.navigate(['/perfil']);
      }).catch(error => { console.log(error); })
    }
  }
}
