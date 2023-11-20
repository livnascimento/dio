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

  title: string = "Dev Tainá - Uma Aventura na Amazônia";
  subtitle: string = "Quem mexeu na prantinha da minha mesa? 🌱";
  imgSrc: string = "https://pm1.aminoapps.com/6723/12fd6a9e0764b2d9e9dd95bff3117c272ad160fdv2_hq.jpg";
  description: string = "Você ama a natureza, super good vibes e passa longe do café porque faz mal pra ansiedade. Acredita que o front-end tem que estar bonito e o back-end tem que consumir o mínimo possível de recursos.";

  result: boolean = true;
}
