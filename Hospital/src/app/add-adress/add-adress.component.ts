import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdressData } from '../model/adressData';
import { PersonData } from '../model/personData';
import { AdressService } from '../service/adress.service';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-adress.component.html',
  styleUrls: ['./add-adress.component.css']
})
export class AddAdressComponent implements OnInit {

  public personData:PersonData= new PersonData();
  public adress:AdressData= new AdressData();

  constructor(private adressService: AdressService, private router:Router, private personService:PersonService ){}

  adressData:AdressData;

  ngOnInit(): void {  }
  public addAdress():void{
    this.adressService.addAdress(this.adress). subscribe(result=>
      console.log("Person add"));
      this.personService.addPerson(this.personData). subscribe(result=>
        console.log("Person add"))
       this.router.navigateByUrl("");
  }

}
