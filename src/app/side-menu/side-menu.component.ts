import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    NgIf
  ]
})
export class SideMenuComponent {
  sidenavMode: 'side' | 'over' = 'side'; 
  isOpened = true;
  isCollapsed = false;
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.sidenavMode = 'over';
        this.isOpened = false; 
        this.isMobile = true; 
      } else {
        this.sidenavMode = 'side';
        this.isOpened = true;
        this.isMobile = false;
      }
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSidenav() {
    this.isOpened = !this.isOpened;
  }

  onContentClick() {
    if (this.sidenavMode === 'side') return;
    if (this.isOpened) {
      this.isOpened = false;
    }
  }
}
