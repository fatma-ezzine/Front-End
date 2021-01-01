import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 
import { CompteService } from '../services/compte.service'; 
import { Compte } from '../model/compte.model';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styles: [
  ]
})
export class UpdateCompteComponent implements OnInit {
  currentCompte = new Compte();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router, 
    private compteService: CompteService) { }

  ngOnInit() {
    this.compteService.consulterCompte(this.activatedRoute.snapshot.params.id). subscribe( comp =>{ 
      this.currentCompte = comp; } ) ;
  }
  updateCompte() { 
    this.compteService.updateCompte(this.currentCompte).subscribe(comp => { 
      this.router.navigate(['comptes']); },(error) => { alert("Problème lors de la modification !"); } ); }

}
