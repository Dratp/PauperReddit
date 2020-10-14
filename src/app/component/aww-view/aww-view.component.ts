import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
import { Awww, Data, Child, RealStuff } from '../../interfaces/awww';


@Component({
  selector: 'app-aww-view',
  templateUrl: './aww-view.component.html',
  styleUrls: ['./aww-view.component.css']
})
export class AwwViewComponent implements OnInit {

  aww:Awww;

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.redditService.getAwww().subscribe(
      (data: Awww) =>
        this.aww=data
    );
  }

}
