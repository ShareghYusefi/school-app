import { Component } from '@angular/core';

// Component Decorator is used to define the metadata for a component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My School Application';
  isToggled = true;
}
