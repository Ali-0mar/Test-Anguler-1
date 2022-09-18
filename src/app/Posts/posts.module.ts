import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

@NgModule({
  imports: [CommonModule, PostRoutingModule],
  declarations: [PostsListComponent, SinglepostComponent],
})
export class PostsModule {}
