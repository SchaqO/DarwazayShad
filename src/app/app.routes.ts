import { Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: 'properties', component: PropertiesComponent},
];
