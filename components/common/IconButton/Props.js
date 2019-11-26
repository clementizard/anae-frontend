import { Fragment } from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
	containerStyles: PropTypes.object,
	href: PropTypes.string,
	ariaLabel: PropTypes.string,
	Icon: PropTypes.object,
	activable: PropTypes.bool,
	defaultActive: PropTypes.bool,
	animProps: PropTypes.shape({
		icons: PropTypes.shape({
			active: PropTypes.oneOfType([ PropTypes.object, PropTypes.symbol ]),
			inactive: PropTypes.oneOfType([ PropTypes.object, PropTypes.symbol ]),
		}),
		labels: PropTypes.shape({
			active: PropTypes.string,
			inactive: PropTypes.string,
		}),
		others: PropTypes.object,
	}),
	onClick: PropTypes.func,
};
export const defaultProps = {
	containerStyles: {},
	href: '',
	ariaLabel: 'button',
	Icon: Fragment,
	activable: false,
	defaultActive: false,
	animProps: {
		icons: { active: Fragment, inactive: Fragment },
		labels: { active: 'active', inactive: 'inactive' },
		others: {},
	},
	onClick: () => null,
};
