<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<div class="card">
  <header class="card-header">
    Title of the Snippet
    <div class="float-right">
      <button type="button" class="btn btn-sm variant-filled-secondary">Edit</button>
      <button type="button" class="btn btn-sm variant-filled-error">X</button>
    </div>
  </header>
  <section class="p-4">
    <CodeBlock language={"HTML"} code={`<h1> This is the html code</hi>`}/>
  </section>
</div>