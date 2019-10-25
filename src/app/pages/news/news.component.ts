import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(public title: Title) {
  }

  ngOnInit() {
    this.title.setTitle(`News`);
  }

}
