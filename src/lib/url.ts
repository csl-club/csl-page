// Prefija rutas internas con el `base` de Astro (p. ej. "/home" en GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path: string) => `${base}${path}`;
