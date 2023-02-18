<script lang="js">
	import AppleButton from './apple-button.svelte';
	import GoogleButton from './google-button.svelte';
	import MagicButton from './magic-button.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="mt-5 border-gray-200 bg-white px-4 py-5 container place-items-center grid gap-y-6">
		<h2 class="text-3xl text-black text-center">Passwordless Login</h2>
		<GoogleButton />
        <AppleButton />
		<MagicButton />
	</div>
</div>
