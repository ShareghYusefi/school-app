import { Component } from '@angular/core';

@Component({
  selector: 'custom',
  standalone: false,
  templateUrl: './custom.html',
  styleUrl: './custom.css',
})
export class Custom {
  title = 'Custom Component Title';
  photo = {
    url: 'https://cats.com/wp-content/uploads/2023/04/cat-pouncing.jpg',
    alt: 'Cat Pouncing',
    width: 150,
  };
  colSpan = 2;
}
