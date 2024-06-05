import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);

// add snippet
export function addSnippet(snippet: CodeSnippetInput) {
  const newSnippet: CodeSnippet = {
    ...snippet,
    favorite: false
  };
  snippetStore.update((items) => {
    return [newSnippet, ...items];
  });
} 

// remove snippet
export function removeSnippet(index: number) {
  snippetStore.update((items) => {
    return items.filter((_, i) => i !== index);
  });
}

// toggle favorite
export function toggleFavorite(index: number) {
  snippetStore.update((items) => {
    return items.map((snippet, i) => {
      if (i === index) {
        snippet.favorite = !snippet.favorite;
      }
      return snippet;
    });
  });
}