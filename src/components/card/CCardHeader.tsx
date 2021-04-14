import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'div'
   */
  component?: string | ElementType
}

export const CCardHeader = forwardRef<HTMLDivElement, CCardHeaderProps>(
  ({ children, component: Component = 'div', className, ...rest }, ref) => {
    const _className = classNames('card-header', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CCardHeader.displayName = 'CCardHeader'
