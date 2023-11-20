import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMenuOpen = false;
  icon: string = "bi bi-list";

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.icon = this.isMenuOpen ? "bi bi-x-lg" : "bi bi-list";
  }

}
