import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { student_Model, Time } from 'src/app/Models/student_model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  time = new BehaviorSubject(0)
  remainingTime =  new Subject<number>()

 Bae_Url=environment.baseUrl
  constructor(private _httpService:HttpClient) { }

  getStudentProfile():Observable<student_Model>{
   return this._httpService.get<student_Model>(`${this.Bae_Url}/profile`)
  }

  getStudentProfiles():Observable<student_Model>{
    return this._httpService.get<student_Model>(this.Bae_Url)
   }

   getTimeDeatils():Observable<Time>{
     return this._httpService.get<Time>(`${this.Bae_Url}/timeAPI`)
   }
 
}
