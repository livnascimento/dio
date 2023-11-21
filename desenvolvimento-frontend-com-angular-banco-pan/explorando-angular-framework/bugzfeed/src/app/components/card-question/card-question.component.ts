import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.css']
})

export class CardQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() question: any;

  answers: Array<string> = ["0", "0", "0", "0"];

  addChoice = (alias: string, questionId: number): void => {
    console.log(questionId);
    this.answers.splice(questionId - 1, 1, alias);
    console.log(this.answers);
  }

}
