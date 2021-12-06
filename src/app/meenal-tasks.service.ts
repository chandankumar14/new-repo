import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeenalTasksService {

// Define API
apiURL = 'http://34.218.20.24:5001/eolreturnmanagement/mapdata?offset=0&limit=5';
completeAPI = "http://34.218.20.24:5001/eolreturnmanagement/completedsteps?productreturnid";
futureAPI ="http://34.218.20.24:5001/eolreturnmanagement/futuresteps?productreturnid"
computatedAPI ="http://34.218.20.24:5001/eolreturnmanagement/computebestdecisionwhatifscenario?productreturnid"

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
// this is completed api
getCompleted(productId:number){
return this._http.get(`${this.completeAPI}=${productId}`)
}
// this is future Api
getFuture(productIds:number){
return this._http.get(`${this.futureAPI}=${productIds}`)
}
computated(productreturnid:number, step2:string, ){
this._http.get(`${this.computatedAPI}=${productreturnid}&packsoh=${step2}`)
}

}
