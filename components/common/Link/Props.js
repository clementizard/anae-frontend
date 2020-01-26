import PropTypes from 'prop-types';

export const propTypes = {
	type: PropTypes.string,
	href: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	containerStyle: PropTypes.object,
};
export const defaultProps = {
	type: 'link',
	containerStyle: {},
};
