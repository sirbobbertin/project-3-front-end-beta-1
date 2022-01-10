import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl =  "http://localhost:7777/api";

  constructor(private http: HttpClient) { }

  updateUserService(updateUser: User):Observable <User>{
    return this.http.put<User>(this.baseUrl+"/users/"+updateUser.user_id,updateUser);
   }
   
}
