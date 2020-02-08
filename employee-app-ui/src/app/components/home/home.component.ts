import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../service/employees.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sex: String[] = ['Male', 'Female',]
  employeeForm: FormGroup;
  validMessage: string = "";

  constructor(private employeeService: EmployeesService) {}

  ngOnInit() {
    this.employeeForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
         email: new FormControl('', Validators.required),
         phone: new FormControl('', Validators.required),
         sex: new FormControl('', Validators.required)
    });
  }

  submitRegistration(){
    if(this.employeeForm.valid){
      this.validMessage = "thank you for registering";
      this.employeeService.
            createEmployee(this.employeeForm.value)
            .subscribe(
              data => {
                this.employeeForm.reset();
                return true;
              },
              error => {
                return Observable.throw(error);
              }
            )
    }
    else
      this.validMessage = "Please fill out the form before submitting";
  }

}
