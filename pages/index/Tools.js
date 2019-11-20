import React, { useState, useEffect } from 'react';
import usePreviousValue from '../../tools/Hooks/previousValue';

export const useHover = () => {
	const [hoveringCircle, setHoveringCircle] = useState(false);
	const [hoveringSvg, setHoveringSvg] = useState(false);
	const [hoveringBackground, setHoveringBackground] = useState(false);
	const [hovering, setHovering] = useState(false);
	const [hoveringValidation, setHoveringValidation] = useState(false);
	const prevHoveringSvg = usePreviousValue(hoveringSvg);

	useEffect(() => {
		// when hovering a link, all others hovers are false.
		if ((hoveringCircle
			|| ((!hoveringSvg && !hoveringBackground && prevHoveringSvg))
			|| (!hoveringSvg && !hoveringBackground && !hoveringCircle && hovering))) {
			// Reset Validation hover
			if (hoveringValidation) setHoveringValidation(false);
			setHovering(true);
		} else if (hovering) {
			// if validation is false (last hovering is true) set it to true
			if (!hoveringValidation) setHoveringValidation(true);
			// if validation is true (The next react event loop) then it's really true.
			if (hoveringValidation) setHovering(false);
		}
		// Only watching hover states.
	}, [hoveringCircle, hoveringSvg, hoveringBackground]);

	const handleTapCircle = () => setHovering(true);
	const handleHoverCircle = value => () => setHoveringCircle(value);
	const handleHoverSvg = value => () => setHoveringSvg(value);
	const handleHoverBackground = value => () => setHoveringBackground(value);

	return [
		hovering,
		{
			handleTapCircle,
			handleHoverCircle,
			handleHoverSvg,
			handleHoverBackground,
		},
	];
};
