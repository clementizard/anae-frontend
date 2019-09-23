import React from 'react';

import {} from './Styles';
import { propTypes, defaultProps } from './Props';

const Article = ({ params: { id } }) => {
    return (<>ARTICLE {id}</>);
}
Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
