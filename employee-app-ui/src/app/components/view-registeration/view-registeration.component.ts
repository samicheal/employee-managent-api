import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../service/employees.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-registeration',
  templateUrl: './view-registeration.component.html',
  styleUrls: ['./view-registeration.component.css']
})
export class ViewRegisterationComponent implements OnInit {
  employee;

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeSingle(this.route.snapshot.params.id);
  }

  getEmployeeSingle(id){
    this.employeeService
                .getEmployee(id)
                .subscribe(
                  data => {
                    this.employee = data;
                  },
                  err => console.log(err),
                  () => console.log("Employees Added")
                );

  }

}
