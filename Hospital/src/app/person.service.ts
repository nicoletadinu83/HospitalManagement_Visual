import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonData } from '../../src/app/model/personData';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  public getPersons(): Observable<PersonData[]> {
    return this.httpClient.get<PersonData[]>('http://localhost:8080/getAllPersons')
  }

  public addPerson(personData:PersonData):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/addPerson1', personData)
  }
public deletePerson(id:number):Observable<any>{
  return this.httpClient.delete<any>('http://localhost:8080/deletePerson/' +  id)
}

}
