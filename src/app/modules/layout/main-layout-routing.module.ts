import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, Routes} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {RouterModule} from "@angular/router";
import {MessagesComponent} from "../../messages/messages.component";
import {ProfileComponent} from "../../profile/profile.component";
import {SavedPostComponent} from "../../saved-post/saved-post.component";
import {SettingsComponent} from "../../settings/settings.component";

const routes :Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`../../Posts/posts.module`).then((module) => module.PostsModule),
  },
  { path: 'messages', component: MessagesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'SavedPost', component: SavedPostComponent },
  { path: 'Settings', component: SettingsComponent },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
