import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import styled from 'styled-components';

export const Container = styled.div`
	max-width: 100vw;
`;
export const Title = styled.div`
`;
export const StyledDetails = styled(ExpansionPanelDetails)`
	flex-direction: column;
`;
export const StyledA = styled.a`
	padding: 16px 0;
	cursor: pointer;
	&:nth-child(n + 2) {
		border-top: solid 1px rgba(0, 0, 0, 0.3);
	}
`;
