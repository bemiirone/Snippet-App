<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
	import { removeSnippet, toggleFavorite } from '../SnippetStore';

  export let snippet: CodeSnippet = {
    title: '',
    language: '',
    code: '',
    favorite: false
  }

  export let index: number;

</script>

<div class="card">
  <header class="card-header">
    <h3>{snippet.title}</h3>
    <div class="float-right">
      <button type="button" class="btn btn-sm variant-filled-secondary" on:click={()=> toggleFavorite(index)}>
        {snippet.favorite ? '♥' : '♡'}
      </button>
      <button type="button" class="btn btn-sm variant-filled-error on:click={()=> removeSnippet(index)}">X</button>
    </div>
  </header>
  <section class="p-4">
    <CodeBlock language={snippet.language} code={snippet.code}/>
  </section>
</div>