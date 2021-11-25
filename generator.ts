import { Action, GeneratorConfig } from 'grit-cli'

export = {
	prompts() {
		return [
			this.createPrompt.list({
				name: 'ui',
				message: 'UI framework:',
				choices: [
					{ name: 'None', value: 'none' },
					{ name: 'Tailwind CSS', value: 'tailwind' },
					{ name: 'Bootstrap', value: 'bootstrap' },
					// {name: 'Chakra UI', value: 'chakra-ui'},
					{ name: 'Antd', value: 'antd' },
				],
				default: 'none',
			}),
			this.createPrompt.list({
				name: 'css_features',
				message: 'CSS Preprocessor:',
				choices: [
					{
						name: 'Just css (built-in support styled-jsx)',
						value: 'css',
					},
					{ name: 'sass/scss', value: 'scss' },
					{ name: 'styled-components', value: 'styled-components' },
				],
				default: 'css',
			}),
			this.createPrompt.list({
				name: 'styled_specific',
				message: 'Do you also want to add styled-system ?',
				choices: [
					{ name: 'None', value: 'none' },
					{ name: 'styled-system', value: 'styled-system' },
				],
				// disabled: ({ answers }) => answers.css_features !== 'styled-components',
				default: 'none',
			}),
			this.createPrompt.checkbox({
				name: 'features',
				message: 'Features:',
				choices: [
					{ name: 'Fetch (next.js built-in)', value: 'fetch' },
					{ name: 'Axios', value: 'axios' },
					{ name: 'Storybook', value: 'storybook' },
					{ name: 'SVGR', value: 'svgr' },
					{ name: 'Environment Variables', value: 'env' },
					{ name: 'Reverse Proxy', value: 'reverse-proxy' },
					{ name: 'Bundle Analyzer', value: 'bundle-analyzer' },
					{ name: 'Apollo GraphQL', value: 'apollo-graphql' },
					{ name: 'graphql-request', value: 'graphql-request' },
				],
				default: ['none'],
			}),
			this.createPrompt.checkbox({
				name: 'hooks',
				message: 'Hooks',
				choices: [
					{ name: 'SWR', value: 'swr' },
					{ name: 'React Query', value: 'react-query' },
					{ name: 'React Use', value: 'react-use' },
				],
				default: ['none'],
			}),
			this.createPrompt.list({
				name: 'state-management',
				message: 'State Management:',
				choices: [
					{ name: 'None', value: 'none' },
					{ name: 'Redux + Redux Toolkit', value: 'redux' },
					{ name: 'Apollo GraphQL', value: 'apollo-graphql' },
					{ name: 'Recoil', value: 'recoil' },
					{ name: 'MobX', value: 'mobx' },
					{ name: 'Zustand', value: 'zustand' },
				],
				default: 'none',
			}),
			this.createPrompt.checkbox({
				name: 'linter',
				message: 'Linting:',
				choices: [
					{ name: 'None', value: 'none' },
					{ name: 'ESlint', value: 'eslint' },
					{ name: 'StyleLint', value: 'stylelint' },
				],
				default: ['eslint'],
			}),
			this.createPrompt.list({
				name: 'testing',
				message: 'Testing Framework:',
				choices: [
					{ name: 'Jest', value: 'jest' },
					{
						name: 'React Testing Library',
						value: 'testing-library',
					},
				],
				default: 'jest',
			}),
			this.createPrompt.list({
				name: 'e2etest',
				message: 'E2E Testing framework:',
				choices: [
					{ name: 'None', value: 'none' },
					{ name: 'Cypress', value: 'cypress' },
				],
				default: 'none',
			}),
			this.createPrompt.list({
				name: 'docker',
				message: 'Docker integration:',

				choices: [
					{ name: 'None', value: 'none' },
					{ name: 'Dockerfile', value: 'docker' },
				],
				default: 'docker',
			}),
			this.createPrompt.list({
				name: 'CI',
				message: 'Continuous integration:',

				choices: [
					{ name: 'None', value: 'none' },
					{ name: 'GitHub Actions', value: 'github-actions' },
					// { message: 'Travis', name: 'travis' },
				],
				default: 'none',
			}),
		]
	},
	actions() {
		const actionsArray: Action[] = [
			this.createAction.add({
				files: '**',
			}),

			this.createAction.move({
				patterns: {
					gitignore: '.gitignore',
					'_package.json': 'package.json',
				},
			}),
		]

		return actionsArray
	},
	async completed() {
		this.gitInit()
		await this.npmInstall()
		this.showProjectTips()
	},
} as GeneratorConfig
