import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchParams, FarmerSearchCardService } from './farmer-search-card.service';
import { Farmer } from '../model/farmer';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {
  private _farmerSearchProvider: Farmer;

  @Input() set farmerSearchProvider(value: Farmer) {
    if(value) {
      this._farmerSearchProvider = value;
    } else {
      this._farmerSearchProvider = this.parseObject();
    }
  }

  parseObject() {
    return {
      id: "",
      name: "",
      document: { documentNumber: "", documentType: "" },
      address: { street: "", state: "", address: "", country: "" }
    };
  }

  get farmerSearchProvider(): Farmer {
    return this._farmerSearchProvider;
  }

  @Output() onFarmerSelectedEvent = new EventEmitter();

  farmer: Farmer;
  params = new SearchParams();

  constructor(private service: FarmerSearchCardService) {

  }

  ngOnInit() {
  }

  emitOnPartnerSelectedEvent() {
    if (!this.params.nameOrDocNumber)
      this.farmerSearchProvider = this.parseObject();
    else
      this.onFarmerSelectedEvent.emit(this.params);
  }

}



