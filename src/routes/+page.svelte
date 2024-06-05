<script lang="ts">
	import { onMount } from 'svelte';
	import { addSnippet, snippetStore } from '../SnippetStore';
	import CodeSnippetCard from '../components/CodeSnippetCard.svelte';
	import type { PageData } from './$types';

	let formData: CodeSnippetInput = {
		title: '',
		language: '',
		code: ''
	};

	export let data: PageData;

	const loadData = () => {
				let userData: CodeSnippet[] = [];
				const localData = localStorage.getItem('snippets');
				if (localData) {
					userData = JSON.parse(localData);
					const pageData: PageData = {
					...data,
					snippets: userData
				};
				snippetStore.set(pageData.snippets);
				} else {
					snippetStore.set(data.snippets);
				}
    };

		onMount(() => {
			loadData();
    });
		
</script>

<div class="flex">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label for="" class="label">
				<span class="label-text">Title</span>
				<input type="text" placeholder="Enter Title" class="input input-bordered" bind:value={formData.title} />
			</label>
			<label for="" class="label">
				<span class="label-text">Language</span>
				<select class="select select-bordered" bind:value={formData.language}>
					<option>HTML</option>
					<option>CSS</option>
					<option>JavaScript</option> 
					<option>TypeScript</option>
			</label>
			<label for="" class="label">
				<span class="label-text">Code Snippet</span>
				<textarea class="textarea textarea-bordered" placeholder="Enter Code Snippet" bind:value={formData.code}></textarea>
			</label>
			<button type="button" class="btn btn-sm variant-filled-primary" on:click={() => addSnippet(formData)}>Add Snippet</button>
		</div>
		<div class="text-center py-6">
			<h2>My Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard snippet={snippet} index={index} />
		{/each}
	</div>
</div>