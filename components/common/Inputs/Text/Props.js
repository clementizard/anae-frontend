import PropTypes from 'prop-types';

export const propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	containerStyle: PropTypes.object,
	form: PropTypes.bool,
};
export const defaultProps = {
	containerStyle: {},
	form: false,
};
