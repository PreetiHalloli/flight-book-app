import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../flight.service';
import { Flights } from '../flight.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  flightList: Flights[] = [];
  order: any;
  public sortField: string = '';
  isDesc: boolean = false;

  staticData: Flights[] = [
    { id: 1, airlineName: 'Indigo', stops: '5', durations: '6', startTime: '7AM', endTime: '1PM', price: 6556 },
    { id: 2, airlineName: 'United Airlines', stops: '2', durations: '4', startTime: '6AM', endTime: '10AM', price: 5445 },
    { id: 3, airlineName: 'American Airlines', stops: '4', durations: '7', startTime: '7AM', endTime: '2PM', price: 5572 },
    { id: 4, airlineName: 'Air India', stops: '1', durations: '6', startTime: '9AM', endTime: '3PM', price: 5552 },
    { id: 5, airlineName: 'Go First', stops: '1', durations: '8', startTime: '5AM', endTime: '1PM', price: 8885 },
    { id: 6, airlineName: 'SpiceJet', stops: '2', durations: '7', startTime: '4AM', endTime: '11AM', price: 2454 },
    { id: 7, airlineName: 'Jet Airways', stops: '3', durations: '6', startTime: '3AM', endTime: '9AM', price: 5544 },
    { id: 8, airlineName: 'Indian Airlines', stops: '5', durations: '4', startTime: '9AM', endTime: '1PM', price: 8778 },
    { id: 9, airlineName: 'Star Air', stops: '5', durations: '5', startTime: '7AM', endTime: '15PM', price: 5778 },
    { id: 10, airlineName: 'SpiceJet', stops: '3', durations: '3', startTime: '6AM', endTime: '9AM', price: 9554 },
    { id: 11, airlineName: 'Indigo', stops: '3', durations: '3', startTime: '10AM', endTime: '1PM', price: 4454 }
  ]

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: FlightsService) {
    this.route.queryParams
      .subscribe(params => {
        this.service.getFlights(params['from'], params['to'], params['date']).subscribe((data: Flights[]) => {
          // this.flightList = data;
          this.flightList = this.staticData;
        })
      })
  }

  ngOnInit(): void {
  }

  getFlightData() {
    this.flightList = this.staticData;
  }

  filter(column: string, event: any) {
    let searchedValue = event.target.value
    let filteredData: Flights[] = [];

    this.staticData.filter((data: Flights) => {
      if (column === 'airlineName') {
        if (data.airlineName.includes(searchedValue.toUpperCase()) || data.airlineName.includes(searchedValue.toLowerCase())) {
          filteredData.push(data)
        }
      } else if (column === 'stops') {
        if (data.stops.includes(searchedValue.toUpperCase()) || data.stops.includes(searchedValue.toLowerCase())) {
          filteredData.push(data)
        }
      } else if (column === 'durations') {
        if (data.durations.includes(searchedValue.toUpperCase()) || data.durations.includes(searchedValue.toLowerCase())) {
          filteredData.push(data)
        }
      }
    })

    this.flightList = filteredData;
    if (searchedValue.length === 0) {
      this.getFlightData()
    }
  }

  public sort(property: string) {
    this.isDesc = !this.isDesc;
    let direction = this.isDesc ? 1 : -1;

    let list: Flights[] = []
    list = this.flightList.sort(function (a: Flights, b: Flights) {
      if (a.durations < b.durations) {
        return -1 * direction;
      }
      else if (a.durations > b.durations) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };

}
