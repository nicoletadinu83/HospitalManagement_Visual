import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { AdressListComponent } from './adress-list/adress-list.component';
import { PersonListComponent } from './person-list/person-list.component';



const routes: Routes = [
  {path:'', component:PersonListComponent},
  {path:'addPerson', component:AddPersonComponent},
  {path:"adressList", component:AdressListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
