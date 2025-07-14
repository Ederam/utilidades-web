import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingService } from '../../services/tracking.service';
import { EventoTracking, ETIQUETAS_AMIGABLES } from '../../models/tracking.model';

@Component({
  selector: 'app-tracking-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking-timeline.component.html',
  styleUrls: ['./tracking-timeline.component.css']
})
export class TrackingTimelineComponent implements OnChanges {

  //ajuste para recibir el estado desde el componente padre
  @Input() estado: string = '';
  etapas: { etapa: string, fecha: string }[] = [];

  constructor(private trackingService: TrackingService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['estado']) {
      this.etapas = this.trackingService.obtenerEtapasPorEstado(this.estado);
    }
  }

  getEtiqueta(etapa: string): string {
    return ETIQUETAS_AMIGABLES[etapa] || etapa;
  }



  eventos: EventoTracking[] = [];

  estadoEtapas: Record<string, string[]> = {
    'Envio-Exitoso': ['RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'Entregado'],
    'Pre-Guia': ['PorIniciar', 'RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'Entregado'],
    'Entrega-Fallida': ['RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'PrimerIntento'],
    'Entrega-Oficina': ['RecibimosTuEnvio', 'BodegaOrigen', 'Viajando', 'BodegaDestino', 'ReclamarOficina']
  };  

  ngOnInit(): void {
    const data = this.trackingService.getTrackingData();
    const estado = data.Estado;
    const etapas = this.estadoEtapas[estado] || [];

    this.eventos = etapas
      .filter(etapa => data[etapa])
      .map(etapa => ({
        etapa,
        fechaStr: data[etapa]
      }));
  }
  
}
