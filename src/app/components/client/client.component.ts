import { ClientService } from './../../services/client.service';
import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { APIResponseModel } from '../../model/interface/role';
import { DatePipe, JsonPipe, UpperCasePipe, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../resusableComponents/alert/alert.component";
import { ButtonComponent } from "../../resusableComponents/button/button.component";



@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, AlertComponent, ButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  currentDate: Date = new Date();

  clientObj: Client = new Client();

  clientList: Client[] = [];
  clientService = inject(ClientService)

  userList$ :Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient(data: string) {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Client created success")
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data: Client){
    this.clientObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm("Are u sure u want to delete?");
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client deleted success")
          this.loadClient();
        } else {
          alert(res.message)
        }
      })
    }}


  }
