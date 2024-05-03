import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8080/dashboard/user";

  mydata = new EventEmitter<Product>();

  constructor(private httpClient: HttpClient) { }

  dataemit(data: Product){
   this.mydata.emit(data);
  }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user: User) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}