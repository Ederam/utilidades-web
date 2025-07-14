import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  getTrackingData(): any {
    // Simula una respuesta desde backend
    return {
      RecibimosTuEnvio: '11/07/2025, 11:26 a. m.',
      BodegaOrigen: '11/07/2025, 01:26 p. m.',
      Viajando: '12/07/2025, 11:26 a. m.',
      BodegaDestino: '13/07/2025, 11:26 a. m.',
      Entregado: '14/07/2025, 09:26 a. m.',
      Estado: 'Envio-Exitoso'
    };
  }
}
