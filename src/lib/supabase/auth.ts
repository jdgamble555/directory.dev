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