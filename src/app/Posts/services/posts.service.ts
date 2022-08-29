import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) { }

  getPosts() {
    //Fetch data from the api
    return this.http.get<{userId:string,id:number,title:string,body:string}[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
