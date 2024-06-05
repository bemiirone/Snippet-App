import type { PageLoad } from './$types';

export const load = (() => {
  return {
    snippets: [
			{
				title: 'HTML Code',
				language: 'HTML',
				code: '<h1> This is the html code</hi>',
				favorite: false
			},
			{
				title: 'CSS Code',
				language: 'CSS',
				code: 'h1 { color: red; }',
				favorite: false
			},
			{
				title: 'JavaScript Code',
				language: 'JavaScript',
				code: 'console.log("Hello World")',
				favorite: false
			},
			{
				title: 'TypeScript Code',
				language: 'TypeScript',
				code: 'console.log("Hello World")',
				favorite: false
			}
		]
  }
}) satisfies PageLoad;