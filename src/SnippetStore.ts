import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);

// add snippet
export function addSnippet(snippet: CodeSnippetInput) {
  const newSnippet: CodeSnippet = {
    ...snippet,
    favorite: false
  };
  snippetStore.update((items) => {
    const updatedItems = [newSnippet, ...items];
    localStorage.setItem('snippets', JSON.stringify(updatedItems));
    return updatedItems;
  });
} 

// remove snippet
export function removeSnippet(index: number) {
  snippetStore.update((items) => {
    const updatedItems = items.filter((_, i) => i !== index);
    localStorage.setItem('snippets', JSON.stringify(updatedItems));
    return updatedItems;
  });
}

// toggle favorite
export function toggleFavorite(index: number) {
  snippetStore.update((items) => {
    const updatedItems = items.map((snippet, i) => {
      if (i === index) {
        return {
        ...snippet,
        favorite: !snippet.favorite
        };
      }
      return snippet;
    });
    localStorage.setItem('snippets', JSON.stringify(updatedItems));
    return updatedItems;
  });
}