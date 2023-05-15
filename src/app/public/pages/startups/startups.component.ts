import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {

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
  showFirstContent = true;
  showsecondContent=false;
  showthirdContent=false;
  showfourthContent=false;
  showfifthContent=false;
  showsixthContent=false;
  showseventhContent=false;
  showeighthContent=false;
  toggleContent() {
    this.showFirstContent = !this.showFirstContent;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=false;
    this.showfifthContent=false;
    this.showsixthContent=false;
    this.showseventhContent=false;
    this.showeighthContent=false;
  }
  toggleContent2() {
    this.showFirstContent = false;
    this.showthirdContent=false;
    this.showfourthContent=false;
    this.showfifthContent=false;
    this.showsixthContent=false;
    this.showseventhContent=false;
    this.showeighthContent=false;
    this.showsecondContent = !this.showsecondContent;
  }
  toggleContent3() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=!this.showthirdContent;
    this.showfourthContent=false;
    this.showfifthContent=false;
    this.showsixthContent=false;
    this.showseventhContent=false;
    this.showeighthContent=false;
  }
  toggleContent4() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=!this.showfourthContent;  
    this.showfifthContent=false;
    this.showsixthContent=false;
    this.showseventhContent=false;
    this.showeighthContent=false;
  }
  toggleContent5() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=false;  
    this.showfifthContent=!this.showfifthContent;
    this.showsixthContent=false;
    this.showseventhContent=false;
    this.showeighthContent=false;
  }
  toggleContent6() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=false;  
    this.showfifthContent=false;
    this.showsixthContent=!this.showsixthContent;
    this.showseventhContent=false;
    this.showeighthContent=false;
  }
  toggleContent7() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=false;  
    this.showfifthContent=false;
    this.showsixthContent=false;
    this.showseventhContent=!this.showseventhContent;
    this.showeighthContent=false;
  }
  toggleContent8() {
    this.showFirstContent = false;
    this.showsecondContent =false;
    this.showthirdContent=false;
    this.showfourthContent=false;  
    this.showfifthContent=false;
    this.showsixthContent=false;
    this.showseventhContent=false;
    this.showeighthContent=!this.showeighthContent;
  }
}
