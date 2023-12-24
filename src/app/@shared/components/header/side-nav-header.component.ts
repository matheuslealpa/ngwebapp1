import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APP_NAVIGATION } from '../../../app-navigation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav-header',
  standalone: true,
  templateUrl: './side-nav-header.component.html',
  styleUrl: './side-nav-header.component.scss',
  imports: [SharedModule, RouterOutlet, CommonModule, RouterLink]
})
export class SideNavHeaderComponent {

  @ViewChild('sidenav', { static: true })
  public sidenav!: MatSidenav;

  public appNavigation? = APP_NAVIGATION;

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
