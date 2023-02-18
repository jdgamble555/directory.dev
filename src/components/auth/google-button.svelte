<script lang="ts">
	import { signInWithGoogle } from '$lib/supabase/auth';
	import GoogleIcon from './google-icon.svelte';
</script>

<button
	class="bg-transparent hover:bg-black hover:bg-opacity-5  text-blue-700 font-semibold py-2 px-4 rounded border flex"
	on:click={signInWithGoogle}
>
	<GoogleIcon class="h-6 w-6 mr-3" />
	Sign in with Google
</button>
