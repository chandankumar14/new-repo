import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeenalTasksService {

// Define API
apiURL = 'http://34.218.20.24:5001/eolreturnmanagement/mapdata?offset=0&limit=5';

  constructor(private _http: HttpClient) { 
  }
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
getList(){
  return this._http.get(this.apiURL)
}

}
