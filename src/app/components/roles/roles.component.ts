import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  
// constructor(private http: HttpClient) {
  
// }
roleList: IRole [] = [];
http = inject(HttpClient);

ngOnInit(): void {
    this.getAllRoles()
}

getAllRoles() {
  this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
    this.roleList = res.data;

  })
}











  // firstName: string = "Angular Tutorial";
  // angularVersion = "Version 18";  

  // version: number = 18;
  // isActive: boolean = false;
  // curentDate: Date = new Date();
  // inputType: string = "button";  
  // selectedState: string = '';


  // showWelcomeAlert (){
  //   alert("Welcome to Angular 18 Tutorial")
  // }

  // showMessage (message: string) {
  //   alert(message)
  // }


}
