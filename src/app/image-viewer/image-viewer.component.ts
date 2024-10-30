import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [ 
    MatDialogContent, 
    MatDialogActions,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss'
})
export class ImageViewerComponent {
  currentIndex: number;

  constructor(
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { images: string[], description: string, startIndex: number }
  ) {
    this.currentIndex = data.startIndex; // Initialize with the passed index
  }

  nextImage() {
    if (this.currentIndex < this.data.images.length - 1) {
      this.currentIndex++;
    }
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
