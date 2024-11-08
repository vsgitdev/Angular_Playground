import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllDesignations") 
    
  }
}
