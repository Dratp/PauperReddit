import { Component, Input, OnInit } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
import { Awww, Data, Child, RealStuff } from '../../interfaces/awww';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {

  @Input() theChild:Child;

  child:Child;

  constructor(private redditService:RedditService) { }

  ngOnInit(): void {
  }

}
