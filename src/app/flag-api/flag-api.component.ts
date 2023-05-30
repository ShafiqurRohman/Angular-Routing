import { Component, OnInit } from '@angular/core';
import { CountryAPIServiceService } from 'src/services/country-apiservice.service';
import { Country } from '../models/country.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flag-api',
  templateUrl: './flag-api.component.html',
  styleUrls: ['./flag-api.component.scss']
})
export class FlagAPIComponent implements OnInit{
  countries!: Country[];

  constructor(
    private route: ActivatedRoute,
  ){}
  

  ngOnInit(): void {
    this.countries = this.route.snapshot.data['countries'];
    console.log(this.countries);
  }
}
