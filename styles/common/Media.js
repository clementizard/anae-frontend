import { S1, S2, S3, S4, S5 } from './Sizes';
import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
	breakpoints: {
		s1: 0,
		s2: S1,
		s3: S2,
		s4: S3,
		s5: S4,
		s6: S5,
	},
});

// Generate CSS to be injected into the head
export const mediaStyle = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
