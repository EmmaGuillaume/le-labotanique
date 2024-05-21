<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<main class="p-8 text-p font-thin">
	<Header />
	<slot />
	<Footer />
</main>
