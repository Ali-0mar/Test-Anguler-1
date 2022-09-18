import { SavedPostComponent } from './saved-post/saved-post.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
// import { SinglepostComponent } from './Posts/singlepost/singlepost.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { PostsListComponent } from './Posts/posts-list/posts-list.component';

const routes: Routes = [
  // { path: '', component: PostsListComponent },
  {
    path: '',
    loadChildren: () =>
      import(`./Posts/posts.module`).then((module) => module.PostsModule),
  },
  { path: 'messages', component: MessagesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'SavedPost', component: SavedPostComponent },
  { path: 'Settings', component: SettingsComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
