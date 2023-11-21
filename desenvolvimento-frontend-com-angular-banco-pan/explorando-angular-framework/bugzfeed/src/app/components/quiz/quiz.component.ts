import { Component, OnInit, Input } from '@angular/core';
import { QuizService, SharedStateService } from './quiz.service';

type QuizType = {
  title: string;
  questions: {
    id: number;
    question: string;
    options: {
      id: number;
      name: string;
      alias: string;
    }[];
  }[];
  results: {
    [key: string]: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  @Input() quizData: QuizType = { title: '', questions: [], results: {} };

  constructor(private quizService: QuizService, protected sharedStateService: SharedStateService) { }

  ngOnInit(): void {
    this.loadQuizData();
  }

  loadQuizData(): void {
    this.quizService.getQuizData().subscribe((data) => {
      this.quizData = data;
    });
  }
}
