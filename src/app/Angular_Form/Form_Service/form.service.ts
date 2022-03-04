import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
 url="https://dev-api.youthresourceapp.com/addDoctorSpecialities"
  constructor(private _http:HttpClient) {

   }
   postData(data:any){
     return this._http.post(this.url, data )
   }
}
