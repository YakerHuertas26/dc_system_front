import z from "zod";
export const  baseSchema = z.object ({
    name: z
        .string()
        .trim()
        .min(1,{error:'El campo es requerido'}),
    password: z
        .string()
        .trim()
        .min(1,{error:'El campo es requerido'}),
});

// schema para el login
export const authSchema = baseSchema.pick({
    name: true,
    password: true,
});

// type para data ingresada del login 
export type authInput= z.infer<typeof authSchema>