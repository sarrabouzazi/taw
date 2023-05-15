import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.css']
})
export class BootcampsComponent implements OnInit {
  private isSelected = false;
  favoriteColor = 'red';
  isClicked=true;
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
  toggle = true;
status = 'Enable'; 

enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
}
  showFirstContent = true;
  showsecondContent=false;
  showthirdContent=false;
  showfourthContent=false;
  toggleContent() {
    this.showFirstContent = !this.showFirstContent;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=false;
  }
  toggleContent2() {
    this.showFirstContent = false;
    this.showthirdContent=false;
    this.showfourthContent=false;
    this.showsecondContent = !this.showsecondContent;
  }
  toggleContent3() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=!this.showthirdContent;
    this.showfourthContent=false;
  }
  toggleContent4() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=!this.showfourthContent;  
  }
}
