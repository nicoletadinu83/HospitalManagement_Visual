import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import {AdressData} from "../model/adressData";
import{Observable, of} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private httpClient: HttpClient) { }

  public getAdressList():Observable<AdressData[]>{
    return this.httpClient.get<AdressData[]>("http://localhost:8080/getListOfAddress");
    }

}
