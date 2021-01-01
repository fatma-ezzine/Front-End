import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte.model';
import {  CompteService } from '../services/compte.service';
import { Router} from  '@angular/router';
@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {
  newCompte = new Compte();

  constructor(private compteService: CompteService , private router : Router ) { }
  ngOnInit(): void {
  }

  addCompte(){ 
    //console.log(this.newCompte); 
    this.compteService.ajouterCompte(this.newCompte) .subscribe(comp => { console.log(comp); }); 
    this.router.navigate(['comptes']);
  }

}
