<script>
	import '../app.css';
	import Leftbar from '@components/layout/leftbar.svelte';
	import Rightbar from '@components/layout/rightbar.svelte';
	import Toolbar from '@components/nav/toolbar.svelte';
	import Container from '@components/layout/container.svelte';
	import Columns from '@components/layout/columns.svelte';
	import Header from '@components/layout/header.svelte';
	import Footer from '@components/layout/footer.svelte';
	import Content from '@components/layout/content.svelte';
</script>

<Toolbar />

<Container>
	<Header />
	<Columns>
		<Leftbar>left bar 21</Leftbar>
		<Content><slot /></Content>
		<Rightbar>right bar xxx</Rightbar>
	</Columns>
	<Footer />
</Container>
