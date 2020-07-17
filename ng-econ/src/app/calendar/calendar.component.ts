import { Component, OnInit } from '@angular/core';

import { CalendarService } from '../calendar.service';

@Component({
  selector: 'd8a88-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarItems;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarItems = this.calendarService.calendarItems;
  }

}
