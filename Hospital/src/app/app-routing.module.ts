import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdressComponent } from './add-adress/add-adress.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AdressListComponent } from './adress-list/adress-list.component';
import { PersonListComponent } from './person-list/person-list.component';



const routes: Routes = [
  {path:'', component:PersonListComponent},
  {path:'addPerson', component:AddPersonComponent},
  {path:"adressList", component:AdressListComponent},
  {path:"addAdress", component: AddAdressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
