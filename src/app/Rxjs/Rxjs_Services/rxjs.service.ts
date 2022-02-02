import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student_Model } from 'src/app/Models/student_model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
 Bae_Url=environment.baseUrl
  constructor(private _httpService:HttpClient) { }

  getStudentProfile():Observable<student_Model>{
   return this._httpService.get<student_Model>(this.Bae_Url)
  }

  getStudentProfiles():Observable<student_Model>{
    return this._httpService.get<student_Model>(this.Bae_Url)
   }
 
}
