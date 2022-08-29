import { Post } from './../post.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  @Input() postData!:any
  constructor() { }
  ngOnInit(): void {
  }
}
