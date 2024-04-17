import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Méthode spécifique pour votre besoin d'indicateur de mise à jour réussie
  setUpdateSuccessIndicator(value: boolean): void {
    this.setItem('updateSuccess', value);
  }

  getUpdateSuccessIndicator(): boolean {
    return this.getItem('updateSuccess') || false;
  }

  clearUpdateSuccessIndicator(): void {
    this.removeItem('updateSuccess');
  }
}
