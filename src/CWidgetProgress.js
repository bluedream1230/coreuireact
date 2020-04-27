import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'
import CProgress from './CProgress'

//component - CoreUI / CWidgetProgress
const CWidgetProgress = props => {

  const {
    children,
    className,
    cssModule,
    //
    header,
    text,
    footer,
    color,
    value,
    inverse,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    'card', 
    inverse ? [color && `bg-${color}`, 'text-white'] : '',
    className
  ), cssModule)

  return (
    <div className={classes} {...attributes}>
      <div className="card-body">
        { header && <div className="h4 m-0">{header}</div>}
        { text && <div>{text}</div>}
        {
          children || <CProgress
            color={!inverse ? color : ''}
            value={value}
            className={`progress-xs my-3 mb-0 ${inverse ? 'progress-white' : ''}`}
          />
        }
        { footer && <small className="text-muted">{footer}</small>}
      </div>
    </div>
  )

}

CWidgetProgress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  text: PropTypes.string,
  footer: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.number,
  inverse: PropTypes.bool,
};

CWidgetProgress.defaultProps = {
  value: 25
};

export default CWidgetProgress;
