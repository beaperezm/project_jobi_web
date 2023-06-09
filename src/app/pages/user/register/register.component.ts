import { IconUser } from '../../../core/services/user/models/iconUser.model';
import { Router } from '@angular/router';
import { UserServiceService } from './../../../core/services/user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Register } from 'src/app/core/services/user/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public avatares: string[] = IconUser;
  public selectedAvatar: string = "";

  public regForm?: FormGroup;

  public userError?: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {
    const onlyNumber = new RegExp('^([0-9])+$');
    const email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    this.regForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl(''),
      phone: new FormControl('', [
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern(onlyNumber),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(email),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
      ]),
      avatar: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.regForm?.get('avatar')?.valueChanges.subscribe((value) => {
      if (!value) { return; }
      this.selectedAvatar = value;
    })
  }

  public sendFormulario() {

      if(!this.regForm?.valid){return;}
  const userRegister: Register = this.regForm?.value;
  debugger
  this.userService.registerApiUser(userRegister).subscribe({
    next: (res) => {
      res;
      this.router.navigate(['home']);
    },
    error: (err) => {
      this.userError = err.error;
      this.regForm?.reset();
    }
  })
  
  }
}
