import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  clientSrv = inject(ClientService);
  employeeList: Employee[]=[];
  

  ngOnInit(): void {
      this.getAllEmployee();
  }

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data
    })    
  }
}
