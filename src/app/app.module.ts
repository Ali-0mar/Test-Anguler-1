import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { TestComponent } from './side-bar/test.component';
import { SinglepostComponent } from './Posts/singlepost/singlepost.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedPostComponent } from './saved-post/saved-post.component';
import { SettingsComponent } from './settings/settings.component';
import { PostsListComponent } from './Posts/posts-list/posts-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SinglepostComponent,
    MessagesComponent,
    ProfileComponent,
    SavedPostComponent,
    SettingsComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
