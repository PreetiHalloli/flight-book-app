import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cities, Flights } from './flight.model';

// when to use here n when to use in app module
@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  countryUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCities(): Observable<Cities[]>{
    return this.http.get<Cities[]>(this.countryUrl);
  }

  getFlights(from:string, to: string, date: string): Observable<Flights[]>{
    // return this.http.get<Flights[]>(`${this.countryUrl}\from?${from}\to?${to}\date${date}`)
    return this.http.get<Flights[]>(this.countryUrl);
  }
  
}
