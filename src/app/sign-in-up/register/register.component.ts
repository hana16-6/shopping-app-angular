import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private fb: FormBuilder, private router:Router) { 
  }
//   adressForm = this.fb.group({

//     adresses: this.fb.array([])
// });
adressForm ; 
addAdress() {
  this.adressForm =this.registerForm.controls.adresses as FormArray;
  this.adressForm.push(this.fb.group({
    adress: ['',[ Validators.required]],
    city: ['', [ Validators.required]],
    street: ['',[ Validators.required]],
    country: ['',[ Validators.required]]
  }));
}
deleteAdress(adressIndex: number){
const location =  this.registerForm.controls.adresses as FormArray;
location.removeAt(adressIndex) ;
}
  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   registerEmail: new FormControl("hh",
    //     [
    //       Validators.required,
    //       Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
    //     ],
    //     )
    // });
 
    this.registerForm = this.fb.group({
      registerEmail:['',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      registerPass:[null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirm_password:['', [Validators.required]],
      Name:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      userName:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      adresses: this.fb.array([])
    },{
      validator: ConfirmedValidator('registerPass', 'confirm_password')
    }
    );
  }
  get registerControls(){
    return this.registerForm.controls;
  }
 get adressesControls(){
    return this.registerForm.controls["adresses"];
  }
  submitReactive(){
    console.log(this.registerForm);
  }
  directToLogin(){
    this.router.navigate(['login']);
    }

}
