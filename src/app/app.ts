import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfaceAPI } from './interface-api';
import { Pollution } from './model/pollution.model';
import { Observable } from 'rxjs';
import { environment } from './environement/environement';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AffichePollution } from './affiche-pollution/affiche-pollution'; 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AffichePollution, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   pollution?: Pollution;

  onDeclaration(payload: Pollution) {
    this.pollution = payload;
  }

  reset() {
    this.pollution = undefined;
  }
}
