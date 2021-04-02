import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { PersonData } from '../../../src/app/model/personData';
import { PersonService } from '../service/person.service';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  /*persons:PersonData[]=[
    {id: 1, firstName: 'Andreea',lastName: "Oprea",
    age: 22,userName: "andropr",password: "123456",gender: "F"  },
    {id: 2, firstName: 'Mihai',lastName: "Oprea",
    age: 40,userName: "mihopr",password: "123456",gender: "M"  },,
  ]*/

  persons: PersonData[] = [];


  constructor(private personService: PersonService, /*private address*/) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(personReceived =>
      this.persons = personReceived)
    /* this.adressService.getAdressById().subscribe(adressReceived=>this.adress=adressReceived)*/

  }
  delete(id: number) {
    this.personService.deletePerson(id).subscribe(message => {
      this.ngOnInit;
      console.log(message);
      console.log(" the id number" + id + "was deleted");
    })
  }

}
