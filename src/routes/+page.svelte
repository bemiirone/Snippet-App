<script lang="ts">
	import CodeSnippetCard from '../components/CodeSnippetCard.svelte';
	let formData: CodeSnippetInput = {
		title: '',
		language: 'HTML',
		code: ''
	}
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
					<option>Python</option>
					<option>Ruby</option>
					<option>Java</option>
					<option>C#</option>
					<option>Go</option>
					<option>SQL</option>
			</label>
			<label for="" class="label">
				<span class="label-text">Code Snippet</span>
				<textarea class="textarea textarea-bordered" placeholder="Enter Code Snippet" bind:value={formData.code}></textarea>
			</label>
		</div>
		<div class="text-center py-6">
			<h2>My Snippets</h2>
		</div>
		<CodeSnippetCard />
	</div>
</div>