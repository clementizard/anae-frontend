import PropTypes from 'prop-types';

export const propTypes = {
	active: PropTypes.bool,
};
export const defaultProps = {
	active: false,
};
export const checkPropsEquality = ({ active: activePrev }, { active: activeNext }) => {
	return activePrev === activeNext;
};
