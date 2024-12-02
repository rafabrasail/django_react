import { SignInData, SignUpData } from "@/lib/schemas/authSchema";
import { api } from "./api";
import { APISignIn, APISignUp } from "@/types/Auth";
import { APIUpdateUser } from "@/types/User";

/* Auth / User */
export const signIn = async (data: SignInData) => {
    return await api<APISignIn>({
        endpoint: 'accounts/signin',
        method: 'POST',
        withAuth: true,
        data
    })
}

export const signUp = async (data: SignUpData) => {
    return await api<APISignUp>({
        endpoint: 'accounts/signup',
        method: 'POST',
        withAuth: false,
        data
    })
}

export const updateUser = async (data: FormData) => {
    return await api<APIUpdateUser>({
        endpoint: 'accounts/profile',
        method: 'PUT',
        data,
        withAttachment: true
    })
}