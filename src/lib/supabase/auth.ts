import { authUser } from "j-supabase";
import { readable } from "svelte/store";
import { supabase } from "./supabase"

export async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    if (error) {
        console.error(error);
    }
    console.log(data);
}

export async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error(error);
    }
}

export interface User {
    email: string;
    id: string;
}

export interface Auth {
    data: User | null;
    loading: boolean;
}

export const auth = readable<Auth>({ data: null, loading: true }, set => {
    return authUser(supabase).subscribe((user) => {
        if (!user?.email) {
            set({ data: null, loading: false }); 
            return;
        }
        set({
            data: {
                email: user.email,
                id: user.id
            },
            loading: false
        });
    });
});


