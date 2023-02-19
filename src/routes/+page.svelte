<script lang="ts">
	import { auth, signout } from '$lib/supabase/auth';
	import Login from '@components/auth/login.svelte';
	import Toolbar from '@components/nav/toolbar.svelte';
</script>

<Toolbar />

{#if $auth.loading}
	<p>Loading...</p>
{:else if !$auth.data}
	<Login />
{:else}
	{JSON.stringify($auth.data)}
	<button on:click={signout}>Logout</button>
{/if}
