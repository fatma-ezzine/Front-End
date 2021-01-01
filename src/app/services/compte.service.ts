import { Injectable } from '@angular/core'; 
import { Compte } from '../model/compte.model'; 
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({ providedIn: 'root' })
 export class CompteService {
  apiURL: string = 'http://localhost:8080/comptes/api';
  comptes : Compte[]; 
  compte : Compte;
   constructor(private http : HttpClient) { }

   listeComptes(): Observable<Compte[]>{ 
     return this.http.get<Compte[]>(this.apiURL);
     }
   
  //un tableau de Produit 

   ajouterCompte( comp: Compte) :Observable<Compte>{ 
    return this.http.post<Compte>(this.apiURL, comp, httpOptions);
       } 
      
       supprimerCompte( id : number){
          //supprimer le produit prod du tableau produits
          const url = `${this.apiURL}/${id}`;
          return this.http.delete(url, httpOptions);
          }

      
          consulterCompte(id:number): Observable<Compte>{ 
            const url = `${this.apiURL}/${id}`; 
            return this.http.get<Compte>(url);
          }

          
          updateCompte(comp :Compte) : Observable<Compte> { 
            return this.http.put<Compte>(this.apiURL, comp, httpOptions); }

            trierComptes()
            { this.comptes = this.comptes.sort((n1,n2) => { 
              if (n1.idCompte > n2.idCompte) 
              { return 1; } 
              if (n1.idCompte < n2.idCompte) 
              { 
                return -1; 
              } 
              return 0; 
            });
             } 
           
  }