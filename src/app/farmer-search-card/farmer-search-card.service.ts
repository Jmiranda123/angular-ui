import { Injectable } from '@angular/core';
import { Farmer } from '../model/farmer';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

export class SearchParams {
  nameOrDocNumber: string;
}

export abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}

@Injectable({
  providedIn: 'root'
})
export class FarmerSearchCardService extends FarmerSearchAbstractProvider {

  private farmerUrl: string;

  constructor(private http: HttpClient) {
    super();
    this.farmerUrl = `${environment.apiUrl}/farmers`
  }

  searchFarmers(param: SearchParams): Promise<Farmer[]> {
    return this.http.get<Farmer[]>(`${this.farmerUrl}/${param.nameOrDocNumber}`).toPromise();
  }

}


