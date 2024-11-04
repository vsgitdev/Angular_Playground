import { iDesignation } from '../../model/interface/role';
import { MasterService } from './../../services/master.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  
  designationList: iDesignation [] = [];
  MasterService = inject(MasterService)

  ngOnInit(): void {
      this.MasterService.getDesignations().subscribe((res:any)=>{
        this.designationList = res;

      })
  }

}
