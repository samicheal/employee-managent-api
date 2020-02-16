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
    let token = localStorage.getItem("access_token");
    return this.http.get('/server/api/v1/employees',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) }
      );

  }

  getEmployee(id: number){
    let token = localStorage.getItem("access_token");
    return this.http.get('/server/api/v1/employees/' + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
      );
  }

  createEmployee(employee){
    let body = JSON.stringify(employee);
    console.log(body);
    return this.http.post('/server/api/v1/employees', body, httpOptions);
  }
}
