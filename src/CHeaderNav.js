import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CHeaderNav

const CHeaderNav = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'c-header-nav'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CHeaderNav.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CHeaderNav.defaultProps = {
  tag: 'ul'
};

export default CHeaderNav;
