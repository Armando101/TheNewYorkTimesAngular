import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.service';
import { Sidebar } from '../models/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	public sidebar: Sidebar;

  constructor(
  	private _articleService: ArticlesService
  ) { }

  ngOnInit(): void {
  	this.sidebar = this._articleService.getSidebar();
  }

}
