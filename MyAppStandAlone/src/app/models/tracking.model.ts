export interface EventoTracking {
  etapa: string;
  fechaStr: string;
}

export const ETIQUETAS_AMIGABLES: Record<string, string> = {
  PorIniciar: 'Por iniciar',
  RecibimosTuEnvio: 'Recibimos tu envío',
  BodegaOrigen: 'Bodega de origen',
  Viajando: 'Viajando',
  BodegaDestino: 'Bodega de destino',
  Entregado: 'Entregado',
  PrimerIntento: 'Primer intento de entrega',
  ReclamarOficina: 'Disponible para recoger'
};
