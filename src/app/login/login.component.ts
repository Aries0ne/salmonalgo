import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formGroup: any;

  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
     
    });



  }



  loginProcess(){
    let select30 = document.getElementById('username1') as HTMLInputElement;
    let value350 = select30.value;
    
    this.formGroup.addControl('email', new FormControl(value350, Validators.required));
    let select31 = document.getElementById('password1') as HTMLInputElement;
    let value31 = select31.value;
    
    this.formGroup.addControl('password', new FormControl(value31, Validators.required));
    console.log(this.formGroup.value)
    if(this.formGroup.valid){
      this.auth.login(this.formGroup.value).subscribe(result=>{
        if(result!= null){
          
       
          this.route.navigate(['/dashboard']);
          
          localStorage.setItem('user',JSON.stringify(result));
          localStorage.setItem('token',result.access);
        }
      },(error) => {
        let sam = document.getElementById('error90') as HTMLElement;
        sam.style.setProperty('display','block')
      }
      )
    }
  }


}
