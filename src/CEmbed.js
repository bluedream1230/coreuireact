import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules, tagPropType } from './Shared/helper.js'

//component - CoreUI / CEmbed

const CEmbed = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    innerRef,
    //
    ratio,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className, 'embed-responsive', `embed-responsive-${ratio}`
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CEmbed.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  ratio: PropTypes.oneOf(['21by9', '16by9', '4by3', '1by1']),
};

CEmbed.defaultProps = {
  tag: 'div',
  ratio: '16by9'
}

export default CEmbed
