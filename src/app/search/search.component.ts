import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCatcherService } from "../services/event-catcher.service";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  resultParameter: string = "Artists";
  routerLinkValue: string = "/result/:value";
  public checkedArtist: boolean = this.service.checkedArtist;
  public placeholderValue: string = this.service.placeholderValue;
  public searchValue:string = '';



  constructor(private router: Router, private service: EventCatcherService) {}

  ngOnInit() {}


  setToArtist() {
    this.service.setToArtist();
    this.placeholderValue  = "Search your artist";
    this.checkedArtist = this.service.checkedArtist;
  }

  setToLocation() {
    this.service.setToLocation();
    this.placeholderValue  = "Search your location";
    this.checkedArtist = !this.service.checkedArtist;
  }

  goToResult(input) {
  
    if (this.service.resultParameter === "Artists") {
      this.searchValue='';
      this.router.navigate(["/result", input]);
    } else if (this.service.resultParameter === "Locations") {
      this.searchValue= '';
      this.router.navigate(["/placeresult", input]);
    }
  }
}
