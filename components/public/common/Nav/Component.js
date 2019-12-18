import React, { memo } from 'react';
import { useRouter } from 'next/router';

import { getArticleByTitleId } from 'Services/Articles';
import { Media } from 'Styles/common/Media';
import AppBar from './AppBar';
import Drawer from './Drawer';
import { propTypes, defaultProps } from './Props';

const Nav = () => {
	const router = useRouter();
	const { id } = router.query;
	const {
		loading,
		error,
		data,
	} = getArticleByTitleId(id);

	return (
		<>
			<Media at="s1">
				<Drawer
					sections={Boolean(id && !loading && data) && data.sections}
					selectedSection={-1}
				/>
			</Media>
			<Media greaterThanOrEqual="s2">
				<AppBar
					article={data}
				/>
			</Media>
		</>
	);
};
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.whyDidYouRender = true;

export default memo(Nav);
