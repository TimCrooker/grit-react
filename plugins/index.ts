export type App = {
	import: Array<string>
	inner: Array<string>
	wrapper: Array<string>[]
}

export type Docs = {
	import: Array<string>
	inner: Array<string>
	wrapper: Array<string>[]
}

export type TestSetup = {
	import: Array<string>
	inner: Array<string>
	wrapper: Array<string>[]
}

export type Base = {
	_app: Partial<App>
	_docs: Partial<Docs>
	testSetup: Partial<TestSetup>
}

export const base: Base = {
	_app: {
		import: [],
		inner: [],
		wrapper: [],
	} as App,
	_docs: {
		import: [],
		inner: [],
		wrapper: [],
	} as Docs,
	testSetup: {
		import: [],
		inner: [],
		wrapper: [],
	} as TestSetup,
}

export type Extend<T> =
	| Partial<T>
	| ((answers: Record<string, any>) => Partial<T>)

export type Package = Record<string, any>

export type Apply<T> = (
	pkg: Package,
	answers: Record<string, any>
) => Partial<T>

export interface PluginfileConfig<T> {
	name: string
	description: string
	url: string
	extend?: Extend<T>
	apply?: Apply<T>
}

export type PluginConfig = PluginfileConfig<Base>
