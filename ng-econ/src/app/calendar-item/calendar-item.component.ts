import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[d8a88-calendar-item]',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent implements OnInit {
  @Input() calendarItem;

  constructor() { }

  ngOnInit(): void {
  }

}
