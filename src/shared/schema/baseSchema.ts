import z from "zod";
export const  baseSchema = z.object ({
    name: z
        .string()
        .min(1,{error:'El compo es requerido'})
        .length(45,{error:'El compo solo debe terner 45 carácteres'})
        .trim(),
    password: z
        .string()
        .min(1,{error:'El compo es requerido'})
        .trim(),
});

// schema para el login
export const authSchema = baseSchema.pick({
    name: true,
    password: true,
});

// type para data ingresada del login 
export type authInput= z.infer<typeof authSchema>