import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  constructor() { }

  date: string = new Date(2023,10,20).toLocaleDateString();

  ngOnInit(): void {
  }

}
