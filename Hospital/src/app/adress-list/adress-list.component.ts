import { Component, OnInit } from '@angular/core';
import { AdressData } from '../model/adressData';
import {AdressService} from "../service/adress.service"

@Component({
  selector: 'app-adress-list',
  templateUrl: './adress-list.component.html',
  styleUrls: ['./adress-list.component.css']
})
export class AdressListComponent implements OnInit {
  adressList:AdressData[];
  adress: AdressData;

  constructor(private adressService: AdressService) { }

  ngOnInit(): void {
    this.adressService.getAdressList().subscribe(receivedAdress=>
      this.adressList= receivedAdress);
  }

  delete(id:number){
    console.log(" Adresa cu id"+ id +" a fost stearsa");
  }

}
