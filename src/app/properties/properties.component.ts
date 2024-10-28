import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    GoogleMapsModule,
    MatGridListModule,
    MatCardModule,
    GoogleMap,
    CommonModule,
    MatInputModule,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {

  center: google.maps.LatLngLiteral = {lat: 35.56750105054852, lng: 45.37182458759354 };
  zoom = 12;

  properties = [
    { id: 1, name: 'Property 1', address: '123 Main St', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745 },
    { id: 2, name: 'Property 2', address: '456 Park Ave', imageUrl: '/stockHouse.jpg', lat: 35.57043893921803, lng: 45.38946811521866  },
    { id: 3, name: 'Property 3', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 48.20885491938101, lng: 16.373730141635335  },
    { id: 4, name: 'Property 4', address: '123 Main St', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745  },
    { id: 5, name: 'Property 5', address: '456 Park Ave', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745  },
    { id: 6, name: 'Property 6', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745  },
    { id: 7, name: 'Property 7', address: '123 Main St', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745  },
    { id: 8, name: 'Property 8', address: '456 Park Ave', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745  },
    { id: 9, name: 'Property 9', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745  },
    { id: 10, name: 'Property 10', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745  },
  ]

  selectedProperty?: { lat: number; lng: number };

  onPropertyClick(property: { lat: number; lng: number }) {
    this.selectedProperty = { lat: property.lat, lng: property.lng };
    this.center = { lat: property.lat, lng: property.lng };
  }

}
