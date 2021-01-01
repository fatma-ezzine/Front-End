import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte.model';
import {  CompteService } from '../services/compte.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  comptes : Compte[];

  constructor(private compteService: CompteService , private router : Router )  { 
   // this.comptes = compteService.listeComptes();
   }

  ngOnInit(): void {
    this.compteService.listeComptes().subscribe(comps => { console.log(comps); this.comptes = comps; });
  }

  supprimerCompte(c: Compte) {
     let conf = confirm("Etes-vous sûr ?"); 
     if (conf) 
     this.compteService.supprimerCompte(c.idCompte).subscribe(() => { console.log("Compte supprimé"); 
     this.SuprimerCompteDuTableau(c);
    }); 
  }
  SuprimerCompteDuTableau(comp : Compte) { this.comptes.forEach((cur, index) => { 
    if(comp.idCompte=== cur.idCompte) { this.comptes.splice(index, 1); } });

}
}