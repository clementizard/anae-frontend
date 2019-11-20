import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
const { withPropsTable } = require('storybook-addon-react-docgen');
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const files = [
	require.context('../components', true, /\.stories\.js$/),
	require.context('../stories', true, /\.stories\.js$/),
];

addDecorator(withPropsTable({}));
addDecorator(withKnobs({}));
addDecorator((Story) => <Story />)

addParameters({
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			kindleFire2: {
				name: 'Kindle Fire 2',
				styles: {
					width: '600px',
					height: '963px',
				},
			},
		},
	},
	options: {
		theme: themes.dark,
	},
});

configure(files, module);
