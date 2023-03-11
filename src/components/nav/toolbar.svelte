<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, signout } from '$lib/supabase/auth';
	import Loader from '@components/utils/loader.svelte';
</script>

<nav class="flex items-center justify-between flex-wrap bg-slate-900 p-6">
	<a href="/">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<span class="material-icons md-24 mr-3 text-yellow-100">folder_open</span>
			<span class="font-semibold text-xl tracking-tight">Directory.dev</span>
		</div>
	</a>
	<div>
		{#if $auth.loading}
			<Loader />
		{:else if !$auth.data}
			<button class="text-white hover:underline" on:click={() => goto('/login')}>Login</button>
		{:else}
			<button class="text-white hover:underline" on:click={() => signout().then(() => goto('/'))}>
				Logout
			</button>
		{/if}
	</div>
</nav>
