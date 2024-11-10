import { DatePipe } from '@angular/common';
import { ClientService } from './../../services/client.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIResponseModel, Employee, Project } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { AlertComponent } from "../../resusableComponents/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completeDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  })

  clientSrv = inject(ClientService);
  employeeList: Employee[]=[];
  clientList: Client[]=[];
  // projectList: Project[]=[];
  

  firstName = signal("Angular 18");
  projectList = signal<Project[]>([])

  ngOnInit(): void {
      const name = this.firstName();
      this.getAllClients();
      this.getAllEmployee();
      this.getAllClientProjects();
      
  }

  changeFnAme() {
    this.firstName.set("ReactJS")
  }

  
  getAllClientProjects() {
    this.clientSrv.getAllClientProjects().subscribe((res:APIResponseModel)=>{
      this.projectList.set(res.data)
    })    
  }

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data
    })    
  }
 

  getAllClients() {
    this.clientSrv.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data
    })    
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addUpdateClientProject(formValue).subscribe((res:APIResponseModel)=>{
      if(res.result) {
        alert('Project created successfully')
      }else {
        alert(res.message)
      }
    })
  }

}
