import { Component, OnInit } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { PropertyDataService } from '../property-data.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


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
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent implements OnInit {

  constructor(private dialog: MatDialog, private propertyDataService: PropertyDataService) {}

  center: google.maps.LatLngLiteral = {lat: 35.56750105054852, lng: 45.37182458759354 };
  zoom = 12;

  properties: any[] = []; 

  ngOnInit(): void {
    this.propertyDataService.getProperties().subscribe({
      next: (propertyData) => {
        this.properties = propertyData.properties; // Access the properties array from the fetched data (service)
      },
      error: (error) => {
        console.error('Error loading properties:', error); 
      },
      complete: () => {
        console.log('Property data loading completed.');
      }
    });
  }
  
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
        startIndex: index,
        propertyDetails: property
      }
    });
  }

}
