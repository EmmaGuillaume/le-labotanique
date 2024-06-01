<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<main class="p-8 font-thin text-p selection:text-white selection:bg-blue md:px-32">
	<Header />
	<slot />
	<Footer />
</main>
