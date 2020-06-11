import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public title: string;
	public subheader: string;

  constructor() { }

  ngOnInit(): void {
  	this.title = 'The New York Times';
  	this.subheader = ' Contenido de subcabecera ';
  }

}
