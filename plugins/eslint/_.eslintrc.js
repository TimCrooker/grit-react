module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'@typescript-eslint/no-var-requires': 0,
		'no-var': ['error'],
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
				singleQuote: true,
				semi: false,
				printWidth: 80,
				tabWidth: 2,
				useTabs: true,
			},
		],
	},
	env: {
		// change as necessary
		node: true,
	},
}
