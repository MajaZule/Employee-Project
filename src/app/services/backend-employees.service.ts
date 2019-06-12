import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class BackendEmployeesService {
  private employeeAPIAddress: string = "http://127.0.0.1:3000/";

  constructor(private _httpClient: HttpClient) { }

  public getAllEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(
      this.employeeAPIAddress + 'employees'
    );
  }

  public getEmployee(id: string): Observable<Employee> {
    return this._httpClient.get<Employee>(
      this.employeeAPIAddress + 'employees/' + id
    );
  }

  public saveNewEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>(
      this.employeeAPIAddress + 'employees',
      employee
    );
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.put<Employee>(
      this.employeeAPIAddress + 'employees',
      employee
    );
  }

  public deleteEmployee(employeeId: string): Observable<any> {
    return this._httpClient.delete(
      this.employeeAPIAddress + 'employees/' + employeeId
    );
  }
}
