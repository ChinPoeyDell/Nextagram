import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get("https://insta.nextacademy.com/api/v1/users")
  }

  getImage(userId) {
    return this.http.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
  }
}
