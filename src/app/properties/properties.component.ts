import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    GoogleMapsModule,
    MatGridListModule,
    MatCardModule,
    GoogleMap,
    CommonModule,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {

  center: google.maps.LatLngLiteral = {lat: 35.56750105054852, lng: 45.37182458759354 };
  zoom = 12;

  properties = [
    { id: 1, name: 'Property 1', address: '123 Main St', imageUrl: '/stockHouse.jpg'  },
    { id: 2, name: 'Property 2', address: '456 Park Ave', imageUrl: '/stockHouse.jpg'  },
    { id: 3, name: 'Property 3', address: '789 Broadway', imageUrl: '/stockHouse.jpg'  },
    { id: 4, name: 'Property 4', address: '123 Main St', imageUrl: '/stockHouse.jpg'  },
    { id: 5, name: 'Property 5', address: '456 Park Ave', imageUrl: '/stockHouse.jpg'  },
    { id: 6, name: 'Property 6', address: '789 Broadway', imageUrl: '/stockHouse.jpg'  },
    { id: 7, name: 'Property 7', address: '123 Main St', imageUrl: '/stockHouse.jpg'  },
    { id: 8, name: 'Property 8', address: '456 Park Ave', imageUrl: '/stockHouse.jpg'  },
    { id: 9, name: 'Property 9', address: '789 Broadway', imageUrl: '/stockHouse.jpg'  },
    { id: 10, name: 'Property 10', address: '789 Broadway', imageUrl: '/stockHouse.jpg'  },
  ]

}
