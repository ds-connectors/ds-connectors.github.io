import { Injectable, OnInit } from '@angular/core';

import * as calendarData from '../calendar.json';

@Injectable({
  providedIn: 'root'
})
export class CalendarService implements OnInit {

  calendarItems: any;

  constructor() {
    this.calendarItems = (calendarData as any).default;
  }

  ngOnInit(): void {
    // console.log("Loaded JSON calendar data:\n")
    // console.dir(this.calendarItems);
  }
}
