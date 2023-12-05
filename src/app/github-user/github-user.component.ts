import { Component, OnInit } from '@angular/core';
import {GithubUserService} from "../services/github-user.service";

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnInit {

  constructor(private _githubUserService: GithubUserService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData(): void{
    this._githubUserService.getUser('kevindaviladev').subscribe(console.log);
  }

}
