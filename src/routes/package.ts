// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_code',
	version: '0.19.0',
	description: 'syntax highlighting using prismjs for Svelte, SvelteKit, TypeScript, and Fuz',
	glyph: '🎨',
	logo: 'logo.svg',
	logo_alt: 'a friendly pink spider facing you',
	public: true,
	license: 'MIT',
	homepage: 'https://code.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_code',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/fuz_code/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	peerDependencies: {
		'@ryanatkn/moss': '*',
		'prism-svelte': '^0.5',
		prismjs: '^1',
		svelte: '^5.0.0-next.0',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.25.3',
		'@ryanatkn/eslint-config': '^0.5.5',
		'@ryanatkn/fuz': '^0.129.3',
		'@ryanatkn/gro': '^0.140.0',
		'@ryanatkn/moss': '^0.18.2',
		'@sveltejs/adapter-static': '^3.0.5',
		'@sveltejs/kit': '^2.7.0',
		'@sveltejs/package': '^2.3.5',
		'@sveltejs/vite-plugin-svelte': '^3.0.0',
		'@types/prismjs': '^1.26.4',
		eslint: '^9.12.0',
		'eslint-plugin-svelte': '^2.44.1',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.264',
		'svelte-check': '^4.0.5',
		tslib: '^2.7.0',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.8.1',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist', 'src/lib/**/*.ts', '!src/lib/**/*.test.*', '!dist/**/*.test.*'],
	exports: {
		'./package.json': './package.json',
		'./Code.svelte': {
			types: './dist/Code.svelte.d.ts',
			svelte: './dist/Code.svelte',
			default: './dist/Code.svelte',
		},
		'./prism.css': {default: './dist/prism.css'},
		'./remove_prism_css_vite_plugin.js': {
			types: './dist/remove_prism_css_vite_plugin.d.ts',
			default: './dist/remove_prism_css_vite_plugin.js',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_code',
	version: '0.19.0',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./Code.svelte': {path: 'Code.svelte', declarations: []},
		'./prism.css': {path: 'prism.css', declarations: []},
		'./remove_prism_css_vite_plugin.js': {
			path: 'remove_prism_css_vite_plugin.ts',
			declarations: [{name: 'remove_prism_css', kind: 'function'}],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
