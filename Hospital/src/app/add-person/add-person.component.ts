import { Component, OnInit } from '@angular/core';
import{PersonData} from '../model/personData';
import { PersonService } from '../person.service';
 import{Router} from '@angular/router'
  
  @Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  public personData: PersonData= new PersonData();

  constructor(private personService: PersonService, private router:Router) { }

  ngOnInit(): void {
  }
   public addPerson():void{
    this.personService.addPerson(this.personData).subscribe(result =>
      console.log("Person add"));
      this.router.navigateByUrl("");
   }

}
