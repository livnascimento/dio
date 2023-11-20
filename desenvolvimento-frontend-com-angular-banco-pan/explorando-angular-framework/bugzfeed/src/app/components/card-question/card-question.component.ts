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

}
