import {AdressData} from "./adressData";

export class PersonData {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    userName: string;
    password: string;
    gender: string;
    addressDto: AdressData= new AdressData;
}