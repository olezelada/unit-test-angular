import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public title: string = 'Question Test !';
  public disableButtons: boolean = false;
  public response: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public markResponse(isYes: boolean): void {
    this.response = isYes;
    this.disableButtons = true;
  }

}
