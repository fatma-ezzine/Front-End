import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComptesComponent } from './comptes/comptes.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { FormsModule } from '@angular/forms';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComptesComponent,
    AddCompteComponent,
    UpdateCompteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
