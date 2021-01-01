import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComptesComponent } from './comptes/comptes.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';

const routes: Routes = [
  {path: "comptes", component : ComptesComponent},
  {path: "add-compte", component : AddCompteComponent},
  { path: "", redirectTo: "comptes", pathMatch: "full" },
  {path: "updateCompte/:id", component: UpdateCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
