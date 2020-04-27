import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CCarouselCaption

const CCarouselCaption = props => {

  const {
    cssModule,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    'carousel-caption',
    className
  ), cssModule)

  return (
    <div 
      className={classes} 
      {...attributes} 
      ref={innerRef}
    />
  )
}

CCarouselCaption.propTypes = {
  cssModule: PropTypes.object,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

export default CCarouselCaption
