import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  user1:any;

  constructor(private user:UserService,private route:Router) { }


  ngOnInit(): void {
    this.user.loaduser().subscribe(res =>{
      this.user1 = res
      console.log(this.user1)
     
    })}

}
