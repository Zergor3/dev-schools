import { defineCollection, z } from "astro:content";

const schools = defineCollection({
  schema: z.object({
    nombre: z.string(),
    lugar: z.string(),
    img: z.string().optional(), // La imagen es opcional
    descripcion: z.string(),
    fundacion: z.number(),
    niveles: z.array(z.string()), // Lista de niveles educativos
    contacto: z.object({
      telefono: z.string(),
      email: z.string().email(),
      web: z.string().url().optional(),
    }),
    direccion: z.string(),
    programas_destacados: z.array(z.string()), // Lista de programas
    infraestructura: z.array(z.string()) // Lista de instalaciones
  }),
});

export const collections = { schools };
