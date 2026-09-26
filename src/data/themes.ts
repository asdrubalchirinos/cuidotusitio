export type ThemeId = 'niebla' | 'olivo' | 'atlantico' | 'arena' | 'pizarra';

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
  /** Approximate swatch colors for UI */
  swatchBg: string;
  swatchFg: string;
}

export const THEME_STORAGE_KEY = 'cuidotusitio-theme';

export const DEFAULT_THEME: ThemeId = 'niebla';

export const themeIds: ThemeId[] = ['niebla', 'olivo', 'atlantico', 'arena', 'pizarra'];

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return !!value && (themeIds as string[]).includes(value);
}

export const themes: Theme[] = [
  {
    id: 'niebla',
    name: 'Niebla',
    description:
      'Fondo gris-azul muy claro; texto azul-gris frío (misma familia, más oscuro). Sereno, al estilo achirinos.com.',
    swatchBg: '#eef2f9',
    swatchFg: '#2a4580',
  },
  {
    id: 'olivo',
    name: 'Olivo',
    description:
      'Fondo sage suave; texto verde bosque de la misma familia. Evoca cuidado y confianza.',
    swatchBg: '#e6f0e4',
    swatchFg: '#1f5a32',
  },
  {
    id: 'atlantico',
    name: 'Atlántico',
    description:
      'Fondo azul-gris claro; tinta azul de la misma familia. Sensación de seguridad y técnica.',
    swatchBg: '#e4eef8',
    swatchFg: '#15408a',
  },
  {
    id: 'arena',
    name: 'Arena',
    description:
      'Fondo piedra cálida; texto marrón/carbón cálido de la misma familia. Cercanía sin terracota.',
    swatchBg: '#f3ebe0',
    swatchFg: '#5c3d22',
  },
  {
    id: 'pizarra',
    name: 'Pizarra',
    description:
      'Fondo slate frío; texto slate azulado profundo de la misma familia. Profesional, clínico.',
    swatchBg: '#e8ebf3',
    swatchFg: '#2a3558',
  },
];
