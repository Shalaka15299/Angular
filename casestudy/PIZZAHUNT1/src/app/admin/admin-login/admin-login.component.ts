import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  // public loginform!: FormGroup;
  public msg: any = [];
  public avail!: boolean;
  public isAdmin!: boolean;
  public isBlocked!: boolean;
  // var checkArray;
  arr: any = [];
  constructor(private http: HttpClient, private router: Router,private adminservice:AdminserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {

    if(f.value.name===""){
      this.msg = "Please enter name"
      this.avail=true;
      return;
    }
    else{

       // console.log(JSON.stringify(this.loginForm.value));
       this.adminservice.login(f.value.name).subscribe(
        data => {
          console.log(data);

          if(!data)
          {
            this.msg = "Not a registered user. Kindly check email or register yourself."
            this.avail=true;
            return;
          }

          this.router.navigate(['/admin']);
        },
        error => {
           console.error(error);
           this.msg = error;
          }
      )
  }
}

}
