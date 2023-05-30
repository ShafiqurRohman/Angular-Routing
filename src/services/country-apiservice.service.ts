import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Country } from 'src/app/models/country.type';

@Injectable({
  providedIn: 'root'
})
export class CountryAPIServiceService {

  constructor(
    private http : HttpClient
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot
  ) {
    return this.getAllcoutnry();
  }

  getAllcoutnry(){
    return this.http.get('https://restcountries.com/v2/all');
  }
}
