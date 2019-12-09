import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	height: 56px;
	width: 100%;
	bottom: 0;
	left: 0;
	box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.1);
	> div > a {
		width: 100%;
		height: 56px;
		padding: 0 !important;
		> span {
			color: black;
		  > svg {
				width: 25px;
				path, circle {
					fill: rgba(0, 0, 0, 0.7);
				}
			}
		}
	}
`;
