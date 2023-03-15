import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  //local
  apiurl = "http://localhost:3000/vehicle"

  constructor(private http: HttpClient) { }

  vehicleInfo(data: any): Observable<any> {
    return this.http.post(`${this.apiurl}`, data)
  }

}
