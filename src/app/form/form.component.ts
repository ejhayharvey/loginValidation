import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  submitted = false;

  loginForm = new FormGroup({
    "email": new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    "password": new FormControl('', [
      Validators.required, Validators.minLength(6)
    ])
  });

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.loginForm.valid) {
      console.log("form is valid!");
    } else {
      console.log(this.loginForm.controls.email.errors);
      
    }
  }

}
