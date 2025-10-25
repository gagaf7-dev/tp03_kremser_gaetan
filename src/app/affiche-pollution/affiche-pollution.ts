import { Component, OnInit } from '@angular/core';
import { InterfaceAPI } from '../interface-api';
import { Pollution } from '../model/pollution.model';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-affiche-pollution',
  templateUrl: './affiche-pollution.html',
  styleUrls: ['./affiche-pollution.css']
})
export class AffichePollution implements OnInit {
  
  public readonly interfaceAPI = inject(InterfaceAPI);
  pollutions: Pollution[] = [];
  loading = true;
  error: string | null = null;



  trackByTitre(index: number, pollution: Pollution) {
  return pollution.titre + (pollution.dateObservation ?? '') + (pollution.lieu ?? '') + index;
}

  ngOnInit(): void {
    this.interfaceAPI.getPollutions().subscribe({
      next: (data) => {
        console.log('Pollutions reçues:', data);
        this.pollutions = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des pollutions';
        this.loading = false;
      }
    });
  }
}

