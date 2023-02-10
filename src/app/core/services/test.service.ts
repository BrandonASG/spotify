import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public url = 'http://localhost:4201/api/'
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2M2RlY2E2NzhkYTZlNzE1ZjIzNWFlMmUiLCJuYW1lIjoiQnJhbmRvbiIsImxhc3RuYW1lIjoiU8OhbmNoZXoiLCJlbWFpbCI6ImJyYW5kb25AbGFnYWxtLm14Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzYwNDk4NzAsImV4cCI6MTY3NjEzNjI3MH0.O21XUngHMIFyOZroPI3deznUDADp5s_iXgL6y16Pcv0'

  constructor(
    private _http: HttpClient
  ) { }

  getemployees(): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.token });
    return this._http.get(this.url + 'employees/1', { headers: headers });
  }
}
