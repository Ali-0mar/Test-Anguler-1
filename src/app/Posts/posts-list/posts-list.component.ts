import { Post } from './../post.interface';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  isLoading:boolean=false
  posts:any;
  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getPosts()
  }
  getPosts() {
 this.postsService.getPosts().pipe(map(res=>res.splice(0,10))).subscribe(res=>{
      this.posts = res;
      this.isLoading = false;
    })
  };
  filterBy(type:string){
    switch (type) {
      case "All" :
       this.getPosts();
       break;
       case "Following":
         this.posts = this.posts.splice(0,3);
         break;
         case "Newest":
         this.posts = this.posts.splice(2,4);
         break;
         case "Pouplar":
         this.posts = this.posts.splice(8,16);
         break;
         default:
         this.posts;
         break
    }
  }
}
