import { EmployeesService } from './../../service/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public employees;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeesService.getEmployees().subscribe(
      data => { this.employees = data },
      err => { console.log(err) },
      () => { console.log('employees returned') }
    );
  }
    
}
