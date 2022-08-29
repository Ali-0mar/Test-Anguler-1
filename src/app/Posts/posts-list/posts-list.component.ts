import { Post } from './../post.interface';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { map, Subscription } from 'rxjs';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {
  isLoading:boolean=false
  posts!: Post[];
  postsList!: Post[];
  postsSubscription!: Subscription;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getPosts()
  }
  getPosts() {
this.postsSubscription= this.postsService.getPosts().pipe(map(res=>res.splice(0,20))).subscribe(res=>{
   this.posts = res
   this.postsList = res
   this.isLoading = false;
 })
  };
  async filterBy(type: string) {
    switch (type) {
      case "All":
        this.getPosts()
       break;
      case "Following":
        this.postsList =this.posts.filter((post) => post.category == "follwing");
         break;
      case "Newest":
        this.postsList = this.posts.filter((post) => post.category == "newest");

         break;
      case "Pouplar":
        this.postsList = this.posts.filter((post) => post.category == "popular");
        break;
      default:
        this.posts;
        break
    }
  }
  //Life cycle hook to cancel all subscritions when the component is unmounted from the dom
  ngOnDestroy(): void {
      this.postsSubscription.unsubscribe()
  }
}
