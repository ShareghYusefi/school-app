import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Icourse } from '../../interfaces/icourse';

@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course implements OnChanges {
  // ! lets typescript know that this variable will be initialized
  @Input() course!: Icourse;

  // define 'deleteEvent' to emit data upward to the parent component
  @Output() deleteEvent = new EventEmitter();

  // define a function for emitting the event and data
  deleteEventTrigger(id: number) {
    this.deleteEvent.emit(id);
  }

  // 2. ngOnChanges runs when @Input property changes from undefined to a value
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course ngOnChanges', changes);
  }
}
