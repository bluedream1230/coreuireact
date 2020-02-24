import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';
import CLink from './CLink';

//component - CoreUI / CNavLink

const CNavLink = props=>{

  const {
    className,
    cssModule,
    //
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'nav-link',
  ), cssModule);

  return (
    <CLink {...attributes} className={classes} />
  );

}

CNavLink.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  href: PropTypes.string,
  to: PropTypes.string
};

CNavLink.defaultProps = {
};

export default CNavLink;
