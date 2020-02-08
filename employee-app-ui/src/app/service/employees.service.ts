import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get('/server/api/v1/employees');
  }

  getEmployee(id: number){
    return this.http.get('/server/api/v1/employees/' + id);
  }

  createEmployee(employee){
    let body = JSON.stringify(employee);
    console.log(body);
    return this.http.post('/server/api/v1//employees', body, httpOptions);
  }
}
