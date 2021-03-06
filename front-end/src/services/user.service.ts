import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import {User} from '../models/user.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';


@Injectable({
  providedIn: 'root'
})

export class UserService{

  private users : User[] = [];
  public users$ :  BehaviorSubject<User[]> = new BehaviorSubject(this.users);
  private userUrl = serverUrl + '/users';
  public userSelected$: Subject<User> = new Subject();
  public userSelectedlogin$: Subject<User> = new Subject();



  private httpOptions = httpOptionsBase;

  constructor(private http : HttpClient) {
    this.setUsersFromUrl();
  }


  setSelectedUser(userId: string) {
    const urlWithId = this.userUrl + '/' + userId;
    this.http.get<User>(urlWithId).subscribe((user) => {
      this.userSelected$.next(user);
    });
  }

  getUserLogin(name : string , password : string) {
    const urlWithId = this.userUrl + '/' + name + '/'+ password;
    this.http.get<User>(urlWithId).subscribe((user) => {
      this.userSelectedlogin$.next(user);
    });
  }


  setUsersFromUrl() {
    this.http.get<User[]>(this.userUrl).subscribe((quizList) => {
      this.users = quizList;
      this.users$.next(this.users);
    });
  }

  addUser(user:User){
    this.http.post<User>(this.userUrl,user,this.httpOptions).subscribe(() =>this.setUsersFromUrl());
  }

  deleteUser(quiz: User) {
    const urlWithId = this.userUrl + '/' + quiz.id;
    this.http.delete<User>(urlWithId, this.httpOptions).subscribe(() => this.setUsersFromUrl());
  }
  updateUser(user: User): void {
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.post<User>(urlWithId, user, this.httpOptions).subscribe(() => this.retrieveUsers());
  }
  retrieveUsers(): void {
    this.http.get<User[]>(this.userUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
    });
  }


}

