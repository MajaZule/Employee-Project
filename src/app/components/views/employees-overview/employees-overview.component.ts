import { Component, OnInit } from '@angular/core';
import { BackendEmployeesService } from '../../../services/backend-employees.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employees-overview',
  templateUrl: './employees-overview.component.html',
  styleUrls: ['./employees-overview.component.css']
})
export class EmployeesOverviewComponent implements OnInit {

  constructor(private backendEmployeesService: BackendEmployeesService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  private getAllEmployees(): void {
    this.backendEmployeesService.getAllEmployees().subscribe(
      (result: Employee[]) => {
        console.log(result);
      },
      error => {
        console.log('There was a problem');
      }
    );
  }
}
