import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizDataUrl = '../../../assets/data/questions.json';

  constructor(private http: HttpClient) {}

  getQuizData(): Observable<any> {
    return this.http.get<any>(this.quizDataUrl);
  }
}
