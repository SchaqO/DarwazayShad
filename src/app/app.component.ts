import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ShowcaseComponent } from './showcase/showcase.component';
import { PropertiesComponent } from './properties/properties.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ShowcaseComponent,
    PropertiesComponent,
    HomepageComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'darwazayShad';

}
