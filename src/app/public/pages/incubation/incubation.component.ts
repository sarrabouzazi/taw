import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-incubation',
  templateUrl: './incubation.component.html',
  styleUrls: ['./incubation.component.css']
})
export class IncubationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 500),
    tap(() => console.log('sas'))
  );

  // not Cross browsing (works on chrome - firefox)
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
