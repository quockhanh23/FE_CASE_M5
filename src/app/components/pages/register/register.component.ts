import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {error} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }

  register(){
    let user = this.registerForm.value
    let newUser: User = {
      username: user.username,
      password: user.password,
      confirmPassword: user.confirmPassword,
    }
    this.userService.register(user).subscribe(rs=>{
      console.log(rs)
      alert("You have successfully registered to our website. Please login! ")
      this.router.navigateByUrl("/login")
    }, error => {
      console.log(error)
      alert("Oops! Something has been wrong. Please try again! ")

    })

  }

}
