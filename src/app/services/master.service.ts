import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts") 
    // Used another free api that dispays posts, just to see if works
  }
}
