import React from 'react';
import NextLink from 'next/link';
import Typography from '@material-ui/core/Typography';

import {
	StyledButton,
	StyledLink,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Link = ({
	type,
	href,
	label,
	containerStyle,
}) => (type === 'button' ? (
	<StyledButton
		variant="outlined"
		fullWidth
		color="primary"
		style={containerStyle}
	>
		<NextLink href={href}>{label}</NextLink>
	</StyledButton>
) : (
	<Typography variant="subtitle1" style={containerStyle}>
		<NextLink href={href}>
			<StyledLink>{label}</StyledLink>
		</NextLink>
	</Typography>
)
);
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
Link.whyDidYouRender = true;

export default Link;
