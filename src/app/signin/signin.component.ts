import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service';
import{FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  formGroup: any;
  message141: any;
  message1: any;
  message: any;
  message180: any;
  message106: any;
  message107: any;
  
  

  


  

  constructor(private activatedRoute: ActivatedRoute,private route: Router,private auth:AuthService, public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.message = params['side'];
      this.message1 = params['sposer'];
    });

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      firstname: new FormControl(''),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      refrecode: new FormControl('salmon', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  signupProcess(){
    
    

    console.log(this.formGroup.value)
    
      this.auth.signup(this.formGroup.value).subscribe(result=>{
        if(result!= null){
          this.route.navigate(['/success']);
        }
      },
      (error) => {
        this.message106 = error.error
        if (this.message106.email != null){
          this.message107 = this.message106.email
        }
        if (this.message106.username != null){
          this.message107 = this.message106.username
        }
        let select305 = document.getElementById('alert109') as HTMLElement;
        select305.style.setProperty('display','block')
      }
      )
    }
   
    }
    
    
  

 


