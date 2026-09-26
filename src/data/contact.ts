/** Código país + número, sin + ni espacios. */
export const WHATSAPP = '525564823442';
export const EMAIL = 'achirinos@cuidotusitio.com';

export function whatsappUrl(text?: string): string {
  if (!text) return `https://wa.me/${WHATSAPP}`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}
