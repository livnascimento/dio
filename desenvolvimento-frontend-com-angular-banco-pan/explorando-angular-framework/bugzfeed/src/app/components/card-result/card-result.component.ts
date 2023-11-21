import { Component, Input, OnInit } from '@angular/core';
import { SharedStateService } from '../quiz/quiz.service';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css']
})
export class CardResultComponent implements OnInit {

  constructor(protected sharedStateService: SharedStateService) { }

  ngOnInit(): void {
  }

  @Input() result: any;

}
