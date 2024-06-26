import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLogOutBtnClick() {
    localStorage['logInUser'] = undefined;
    window.location.reload();
  }
}
