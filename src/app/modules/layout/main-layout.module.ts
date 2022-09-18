import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MainLayoutRoutingModule} from "./main-layout-routing.module";
import {PostsModule} from "../../Posts/posts.module";
import {TestComponent} from "./side-bar/test.component";

@NgModule({
  declarations: [
    MainLayoutComponent,
    TestComponent

  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    PostsModule,
  ]
})
export class MainLayoutModule { }
