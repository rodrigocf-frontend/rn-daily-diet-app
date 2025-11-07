import * as zod from "zod";

export const snackSchema = zod
  .object({
    name: zod.string().min(2, "Nome"),
    description: zod.string().min(2, "Descrição"),
    date: zod.string().min(4, " Data").max(10, "Data"),
    hour: zod.string().min(4, " Hora").max(5, "Hora"),
    withinTheDiet: zod.boolean(),
  })
  .required({
    date: true,
    hour: true,
    name: true,
    withinTheDiet: true,
  });

export type SnackSchema = zod.infer<typeof snackSchema>;
