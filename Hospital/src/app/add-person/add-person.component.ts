import { Component, OnInit } from '@angular/core';
import { PersonData } from '../model/personData';
import { PersonService } from '../service/person.service';
import { Router } from '@angular/router';
import { AdressData } from "../model/adressData";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  public personData: PersonData = new PersonData();
  public adressDto: AdressData = new AdressData();

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }
  public addPerson(): void {
    this.personService.addPerson(this.personData).subscribe(result =>

      console.log("Person add"));

    this.router.navigateByUrl("");

  }

}
