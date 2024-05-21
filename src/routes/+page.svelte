<script lang="ts">
	import { Link } from 'svelte-routing';

	import Card from '../components/card.svelte';
	import { articles } from '$lib/plants';
</script>

<section class="mt-8 space-y-2">
	<p class="">
		Je suis une étudiante en informatique passionnée de plantes. Le but de ce site est de documenter
		mes expériences, partager mes observations et aider à trouver des solutions à des problèmes.
	</p>
	<p class="font-semibold">
		Je ne suis en aucun cas experte, les informations que vous trouverez sur ce site seront sourcées
		ou bien tirées de mes expériences personnelles.
	</p>
</section>

<section class="mt-8">
	<h2 class="mb-4 font-serif text-h2">Liste des ressources</h2>
	<div class="flex flex-col gap-8 md:flex-row md:flex-wrap">
		{#each articles as article}
			<a href={`/${article.urlTitle}`}>
				<Card imgUrl={article.imageUrl} title={article.title} />
			</a>
		{/each}
	</div>
</section>
