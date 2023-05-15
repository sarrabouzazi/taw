import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  
  imgCollection: Array<object> = [
    {
      thumbImage: "assets/img/Media Outlets/ethiopia new agency.png",

    }, {
      thumbImage: "assets/img/Media Outlets/African-Business-600x400.gif",
     
    }, {
      
      thumbImage: "assets/img/Media Outlets/All Africa.png",
    
    }, {
      thumbImage: "assets/img/Media Outlets/Capital_ethiopia_logo.png",
    
    }, {
      
      thumbImage: "assets/img/Media Outlets/dirupt africa.png",
      
    },
    {
      
      thumbImage: "assets/img/Media Outlets/ecofin.jpg",
      
    },
    {
      
      thumbImage: "assets/img/Media Outlets/Ethiopian News Agency.png",
      
    }
    ,
    {
      
      thumbImage: "assets/img/Media Outlets/Express_FM.png",
      
    }
    ,
    {
      
      thumbImage: "assets/img/Media Outlets/Gulf Africa.jpg",
      
    }
    ,
    {
      
      thumbImage: "assets/img/Media Outlets/ilboursa.png",
      
    }
    ,
    {
      
      thumbImage: "assets/img/Media Outlets/It News Africa.png",
      
    }
    ,
    {
      
      thumbImage: "assets/img/Media Outlets/managers logo.png",
      
    }
    ,
    {
      
      thumbImage: "assets/img/Media Outlets/mosaique fm.png",
      
    }
    ,
    {
      
      thumbImage: "assets/img/Media Outlets/uneca.png",
      
    }
];
}
