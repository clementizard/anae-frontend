import PropTypes from 'prop-types';

export const propTypes = {};
export const defaultProps = {};
export const checkPropsEquality = (prevProps, nextProps) => {
	return nextProps.sectionDelta === prevProps.sectionDelta
		|| (nextProps.sectionDelta > (nextProps.height + 50) || nextProps.sectionDelta < -(nextProps.height + 50));
};
