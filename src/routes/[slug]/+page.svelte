<script lang="ts">
	import Icon from '@iconify/svelte';
	/** @type {import('$lib/plants').PageData} */

	import { articles } from '$lib/plants';

	const actualUrl = window.location.pathname.replace(/^\/+/, '');

	const currentArticle = articles.find((article) => article.urlTitle === actualUrl);

	console.log(currentArticle);

	if (!currentArticle) {
		window.location.href = '/';
	}
</script>

<ul class="pl-4 mt-8 font-serif list-disc underline text-blue">
	<li><a href="#context">Context</a></li>
	<li><a href="#observations">Mes observations</a></li>
	<li><a href="#sources">Sources</a></li>
</ul>

<section class="mt-8 space-y-2">
	<h2 class="font-serif text-h2">{currentArticle?.title}</h2>
	<img src={currentArticle?.imageUrl} alt="" />
	<p class="">
		{currentArticle?.description}
	</p>
</section>

<section id="context" class="mt-8 space-y-2">
	<h2 class="font-serif text-h2">Context</h2>
	<p class="">
		{currentArticle?.context}
	</p>
</section>

<section id="observations" class="mt-8 space-y-2">
	<h2 class="font-serif text-h2">Observations</h2>
	<ul class="pl-4 list-disc">
		{#if currentArticle}
			<ul class="pl-4 list-disc">
				{#each currentArticle.observations as observation}
					<li>{observation}</li>
				{/each}
			</ul>
		{/if}
	</ul>
</section>

<section id="sources" class="mt-8 space-y-2">
	<h2 class="font-serif text-h2">Sources</h2>
	<ul class="underline text-blue">
		{#if currentArticle}
			<ul class="pl-4 list-disc">
				{#each currentArticle.sources as source}
					<li>{source}</li>
				{/each}
			</ul>
		{/if}
	</ul>
</section>
