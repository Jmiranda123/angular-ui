import { Component, OnInit } from '@angular/core';
import { FarmerSearchCardService, SearchParams } from '../farmer-search-card/farmer-search-card.service';
import { HttpClient } from '@angular/common/http';
import { Farmer } from '../model/farmer';

@Component({
  selector: 'app-farmer-card',
  templateUrl: './farmer-card.component.html',
  styleUrls: ['./farmer-card.component.css']
})
export class FarmerCardComponent implements OnInit {

  http: HttpClient;
  param = new SearchParams();
  myFarmerSearchProvider: Farmer;
  constructor(private service: FarmerSearchCardService) {

  }

  ngOnInit() {
  }

  mySelectedFarmer(params: SearchParams) {
    this.service.searchFarmers(params).then(result => {
      this.myFarmerSearchProvider = result[0];
    });
  }



}
