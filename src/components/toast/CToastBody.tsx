import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CToastBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CToastBody = forwardRef<HTMLDivElement, CToastBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('toast-body', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CToastBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CToastBody.displayName = 'CToastBody'