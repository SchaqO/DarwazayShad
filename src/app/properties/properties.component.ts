import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';


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
    { id: 1, name: 'Property 1', address: '123 Main St', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg'] },
    { id: 2, name: 'Property 2', address: '456 Park Ave', imageUrl: '/stockHouse.jpg', lat: 35.57043893921803, lng: 45.38946811521866, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 3, name: 'Property 3', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 48.20885491938101, lng: 16.373730141635335, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 4, name: 'Property 4', address: '123 Main St', imageUrl: '/stockHouse.jpg', lat: 35.583069615821415, lng: 45.38370139947592, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 5, name: 'Property 5', address: '456 Park Ave', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 6, name: 'Property 6', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 7, name: 'Property 7', address: '123 Main St', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 8, name: 'Property 8', address: '456 Park Ave', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 9, name: 'Property 9', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
    { id: 10, name: 'Property 10', address: '789 Broadway', imageUrl: '/stockHouse.jpg', lat: 35.56964479232118, lng: 45.386453312323745, description: "This is where the expendable area is.", extraImages: ['/interior.jpg','/bedroom.jpg','/bathroom.jpg']  },
  ] 

  constructor(private dialog: MatDialog) {}

  selectedProperty?: {id: number; lat: number; lng: number };

  onPropertyClick(property: {id: number; lat: number; lng: number }) {
    if (this.selectedProperty?.id === property.id) {
      this.selectedProperty = undefined; 
    } else {
      this.selectedProperty = { lat: property.lat, lng: property.lng, id: property.id };
      this.center = { lat: property.lat, lng: property.lng };
      this.zoom = 15;
    }
  }

  openImageViewer(property: { extraImages: string[], description: string }, index: number) {
    this.dialog.open(ImageViewerComponent, {
      data: { 
        images: property.extraImages, 
        description: property.description, 
        startIndex: index
      }
    });
  }
  

}
