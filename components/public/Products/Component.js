import React from 'react';

import { getLayout } from 'Layouts/public';
import {} from './Styles';
import { propTypes, defaultProps } from './Props';

const Products = () => {
  return (
    <>
      Products
    </>
  );
};
Products.getLayout = getLayout;
Products.propTypes = propTypes;
Products.defaultProps = defaultProps;
Products.whyDidYouRender = true;

export default Products;

