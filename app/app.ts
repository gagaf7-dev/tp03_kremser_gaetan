import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfaceAPI } from './interface-api';
import { Pollution } from './model/pollution.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from './environement/environement';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AffichePollution } from './affiche-pollution/affiche-pollution'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AffichePollution,HttpClientModule],
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
