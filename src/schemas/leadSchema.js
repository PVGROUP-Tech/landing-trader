import { z } from "zod";

export const leadSchema = z.object({
nome: z
.string()
.trim()
.min(3, "Digite seu nome completo"),

email: z
.string()
.trim()
.email("Digite um e-mail válido"),

whatsapp: z
.string()
.refine(
(value) =>
value.replace(/\D/g, "").length === 11,
"Digite um WhatsApp válido"
),
});
