import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  users = new Array<User>();
  selected: User;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
