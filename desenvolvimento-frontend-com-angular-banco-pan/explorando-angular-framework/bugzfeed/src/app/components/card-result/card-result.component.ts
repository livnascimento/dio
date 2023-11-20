import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css']
})
export class CardResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "";
  subtitle: string = "";
  imgSrc: string = "";
  description: string = "";

  result: boolean = false;
}
