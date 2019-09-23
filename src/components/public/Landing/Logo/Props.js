import PropTypes from 'prop-types';

export const propTypes = {
  active: PropTypes.bool,
  onHoverSvg: PropTypes.func,
  onHoverCircle: PropTypes.func,
  onTapCircle: PropTypes.func,
};
export const defaultProps = {
  active: false,
  onHoverSvg: () => {},
  onHoverCircle: () => {},
  onTapCircle: () => {},
};
export const checkPropsEquality = ({ active: activePrev }, { active: activeNext }) => {
  return activePrev === activeNext;
};
