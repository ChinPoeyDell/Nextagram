import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor(private http: HttpClient) { }


  getImages(){
    return this.http.get("https://insta.nextacademy.com/api/v1/images?userId=1")
  }

}
