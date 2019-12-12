import PhotoSizeSelectLarge from '@material-ui/icons/PhotoSizeSelectLarge';
import PhotoSizeSelectSmall from '@material-ui/icons/PhotoSizeSelectSmall';

export const ImageVariants = {
	closed: {
		width: 'var(--fullWidth)',
		height: 'calc(var(--fullHeight) / 3)',
		translateY: '0vw',
		rotate: 0,
		zIndex: 'initial',
		top: 0,
		left: 0,
	},
	open: {
		width: 'var(--fullHeight)',
		height: 'var(--fullWidth)',
		translateY: '-100vw',
		rotate: 90,
		zIndex: '1',
	},
};
export const iconAnimProps = {
	icons: {
		active: PhotoSizeSelectSmall,
		inactive: PhotoSizeSelectLarge,
	},
	labels: {
		active: 'open',
		inactive: 'closed',
	},
	others: {
		variants: {
			closed: { rotate: 0 },
			open: { rotate: 90 },
		},
		initial: 'closed',
	},
};
