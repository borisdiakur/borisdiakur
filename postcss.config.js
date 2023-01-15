import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import cssnano from 'cssnano'

export default {
	plugins: [
		postcssNested(),
		postcssPresetEnv({
			features: {
				'focus-visible-pseudo-class': false,
			},
		}),
		postcssImport(),
		cssnano({
			preset: 'default',
		}),
	],
}
