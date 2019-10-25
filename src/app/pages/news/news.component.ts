import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  items = [
    {
      id: 1,
      title: 'Hello World',
      description: 'Hello World that is a beautiful day is not it?'
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
