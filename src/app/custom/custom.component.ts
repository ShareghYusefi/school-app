import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  standalone: false,
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {
  title = 'Custom Component Title';
  imageUrl =
    'https://www.google.com/imgres?q=google%20logo&imgurl=https%3A%2F%2Fstorage.googleapis.com%2Fgd-prod%2Fimages%2Fa910d418-7123-4bc4-aa3b-ef7e25e74ae6.faa49ab5e1fff880.webp&imgrefurl=https%3A%2F%2Fdesign.google%2Flibrary%2Fevolving-google-identity&docid=cBmV3tv6irC1jM&tbnid=5K1cI-fVUAoOUM&vet=12ahUKEwi_lKvDvaaMAxWdLTQIHU9UC9IQM3oECB0QAA..i&w=1216&h=1216&hcb=2&ved=2ahUKEwi_lKvDvaaMAxWdLTQIHU9UC9IQM3oECB0QAAA';
  alt = 'This is the google logo';
}
