import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,take,tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) { }
  categories: string[] = ["follwing", "newest", "popular"]
  getPosts() {
    //Fetch data from the api
    //The tap operator is a rxjs operator that we can use to manipulate the response
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts").pipe(tap((posts) => {
      return posts.map((post: any) => post.category = this.categories[Math.round(Math.random() * 2)]);
    }))
  }
}
