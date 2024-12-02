"use client";

import { z } from "zod";

export const signInSchema = z.object({
        email: z.string().email({ message: "Invalid email" }),
        password: z.string().min(1, { message: "Password must be at least 6 characters long" }),
})

export type SignInData = z.infer<typeof signInSchema>

export const signUpSchema = z.object({
        name: z.string().min(1, { message: "Name must be at least 1 characters long" }).max(80, { message: "Name must be at most 255 characters long" }),
        email: z.string().email({ message: "Invalid email" }).max(255, { message: "Email must be at most 255 characters long" }),
        password: z.string()
                .min(1, { message: "Password must be at least 6 characters long" })
                .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
                .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
                .regex(/[0-9]/, "A senha deve conter pelo menos um número"),
})

export type SignUpData = z.infer<typeof signUpSchema>