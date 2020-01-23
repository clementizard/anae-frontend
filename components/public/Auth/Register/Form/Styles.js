import React from 'react';
import { TextField } from 'formik-material-ui';
import styled from 'styled-components';

export const Text = styled(({ name, ...props }) => (
	<TextField
		key={name}
		id={name}
		name={name}
		variant="outlined"
		fullWidth
		{...props}
	/>
))`
	margin-bottom: 24px;
`;
