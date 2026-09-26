/** Código país + número, sin + ni espacios. */
export const WHATSAPP = '5214490000000';
export const EMAIL = 'hola@cuidotusitio.com';

export function whatsappUrl(text?: string): string {
  if (!text) return `https://wa.me/${WHATSAPP}`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}
