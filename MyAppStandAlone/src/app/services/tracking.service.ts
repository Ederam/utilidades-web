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

  //poder enviar el filtro
  private datosPorEstado: Record<string, any> = {
    'Envio-Exitoso': {
      RecibimosTuEnvio: '11/07/2025, 11:26 a. m.',
      BodegaOrigen: '11/07/2025, 01:26 p. m.',
      Viajando: '12/07/2025, 11:26 a. m.',
      BodegaDestino: '13/07/2025, 11:26 a. m.',
      Entregado: '14/07/2025, 09:26 a. m.',
      Estado: 'Envio-Exitoso'
    },
    'Pre-Guia': {
      PorIniciar: '10/07/2025, 05:25 a. m.',
      RecibimosTuEnvio: '11/07/2025, 01:25 a. m.',
      BodegaOrigen: '11/07/2025, 09:25 p. m.',
      Viajando: '12/07/2025, 09:25 a. m.',
      BodegaDestino: '13/07/2025, 09:25 a. m.',
      Entregado: '14/07/2025, 10:30 a. m.',
      Estado: 'Pre-Guia'
    },
    'Entrega-Fallida': {
      RecibimosTuEnvio: '10/07/2025, 03:25 p. m.',
      BodegaOrigen: '11/07/2025, 11:25 a. m.',
      Viajando: '12/07/2025, 07:25 a. m.',
      BodegaDestino: '13/07/2025, 03:25 a. m.',
      PrimerIntento: '14/07/2025, 08:00 a. m.',
      Estado: 'Entrega-Fallida'
    },
    'Entrega-Oficina': {
      RecibimosTuEnvio: '10/07/2025, 08:25 p. m.',
      BodegaOrigen: '11/07/2025, 04:25 p. m.',
      Viajando: '12/07/2025, 12:25 p. m.',
      BodegaDestino: '13/07/2025, 08:25 a. m.',
      ReclamarOficina: '14/07/2025, 09:00 a. m.',
      Estado: 'Entrega-Oficina'
    }
  };

  private ordenEtapas: Record<string, string[]> = {
    'Envio-Exitoso': ['RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'Entregado'],
    'Pre-Guia': ['PorIniciar', 'RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'Entregado'],
    'Entrega-Fallida': ['RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'PrimerIntento'],
    'Entrega-Oficina': ['RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'ReclamarOficina']
  };

  obtenerEtapasPorEstado(estado: string): { etapa: string, fecha: string }[] {
    const datos = this.datosPorEstado[estado];
    const orden = this.ordenEtapas[estado];

    if (!datos || !orden) return [];

    return orden
      .filter(etapa => datos[etapa])
      .map(etapa => ({
        etapa,
        fecha: datos[etapa]
      }));
  }
}
