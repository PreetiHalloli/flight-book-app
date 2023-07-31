import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flight.service';
import { Cities } from '../flight.model';
import { Dropdown } from 'bootstrap'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cities: Cities[] = [];
  currentDate: Date = new Date();

  flightForm: FormGroup

  constructor(private service: FlightsService,
    private fb: FormBuilder,
    private router: Router) {
    this.flightForm = this.fb.group({
      selectedDate: [],
      fromCity: [],
      toCity: []
    })
  }

  ngOnInit(): void {
    this.getCities();
  }

  /* This method is used to get the list of cities.
   */
  getCities() {
    this.service.getCities().subscribe((data) => {
      this.cities = data;
    })
  }

  /* This method is used to redirect the user on flight list page.
   */
  search() {
    let values = this.flightForm.value;
    this.router.navigate(
      ['/flights-list'],
      { queryParams: { date: values.selectedDate, from: values.fromCity, to: values.toCity } }
    );
  }

}
