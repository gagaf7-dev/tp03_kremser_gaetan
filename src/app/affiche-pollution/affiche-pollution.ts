import { Component, OnInit } from '@angular/core';
import { InterfaceAPI } from '../interface-api';
import { Pollution } from '../model/pollution.model';

@Component({
  selector: 'app-affiche-pollution',
  templateUrl: './affiche-pollution.html',
  styleUrls: ['./affiche-pollution.css']
})
export class AffichePollution implements OnInit {
  pollutions: Pollution[] = [];
  loading = true;
  error: string | null = null;

  constructor(private api: InterfaceAPI) {}

  ngOnInit(): void {
    this.api.getPollutions().subscribe({
      next: (data) => {
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

