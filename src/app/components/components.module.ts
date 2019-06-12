import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../widgets/widgets.module';
import { EmployeesOverviewComponent } from './views/employees-overview/employees-overview.component';

@NgModule({
  declarations: [EmployeesOverviewComponent],
  imports: [
    CommonModule,
    WidgetsModule
  ]
})
export class ComponentsModule { }
