import { Component, OnInit, Input } from '@angular/core';
import { SharedStateService } from '../quiz/quiz.service';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.css']
})

export class CardQuestionComponent implements OnInit {

  constructor(private sharedStateService: SharedStateService) { }

  ngOnInit(): void {

  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  @Input() question: any;

  addChoice = (alias: string, questionId: number): void => {
    this.sharedStateService.answers.splice(questionId - 1, 1, alias);
    
    if (this.sharedStateService.answers.every(value => value !== "0")) {
      this.sharedStateService.cardResult = true;
      this.sharedStateService.resultAlias = this.calculateResult();
    }
  }

  calculateResult() {
    const answers = this.sharedStateService.answers;
    const result = answers.reduce((previous, current, i, arr) => {
      if (arr.filter(element => element === previous).length > arr.filter(element => element === current).length) {
        return previous;
      } else {
        return current;
      }
    });
    return result;
  }

}
