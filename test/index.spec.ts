import path from 'path'
import { getGenerator } from 'grit-cli'

const generator = path.join(__dirname, '..')

test('defaults', async () => {
	const grit = await getGenerator({
		generator,
		mock: true,
		answers: {
			name: 'test',
			pmRun: 'yarn',
			features: 'none',
		},
	})
	await grit.run()

	expect(await grit.getOutputFiles()).toMatchSnapshot()
})
