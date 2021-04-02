import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AdressData } from "../model/adressData";
import { Observable, of } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private httpClient: HttpClient) { }

  public getAdressList(): Observable<AdressData[]> {
    return this.httpClient.get<AdressData[]>("http://localhost:8080/getListOfAddress");
  }

  public getAdress(id: number): Observable<any> {
    return this.httpClient.get<AdressData>('http://localhost/getAddress/' + id);
  }

  public addAdress(adress: AdressData): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/addAdress', adress)
  }
  public deleteAdress(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/deleteAddress/' + id)
  }

  public updateAdress(adressData: AdressData): Observable<any> {
    return this.httpClient.put<any>('http://localhost:8080/updateAddress', adressData)
  }
}
