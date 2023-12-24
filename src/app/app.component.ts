import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavHeaderComponent } from "./@shared/components/header/side-nav-header.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, SideNavHeaderComponent]
})
export class AppComponent {
  title = 'ngwebapp1';
shouldRun: any;
}
