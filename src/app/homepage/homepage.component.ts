import { Component } from '@angular/core';
import { ShowcaseComponent } from '../showcase/showcase.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ShowcaseComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
