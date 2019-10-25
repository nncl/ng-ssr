import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.css']
})
export class NewsSingleComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public title: Title
  ) {
  }

  ngOnInit() {
    const {id} = this.route.snapshot.params;
    this.title.setTitle(`News ${id}`);
  }

}
