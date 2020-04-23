import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

export const Context = React.createContext({})
//component - CoreUI / CModal

const CModal = props => {

  const {
    cssModule,
    //
    innerRef,
    show,
    centered,
    size,
    color,
    borderColor,
    fade,
    backdrop,
    closeOnBackdrop,
    onOpened,
    onClosed,
    addContentClass,
    onClose,
    ...attributes
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState()

  const modalClick = e => e.target.dataset.modal && closeOnBackdrop && close()

  useEffect(() => {
    if (!show && !isOpen) {
      return
    }
    toggleShow(show)
    return () => clearTimeout(isTransitioning)
  }, [show])

  const close = () => {
    onClose && onClose()
    toggleShow(false)
  }

  const toggleShow = (val) => {
    if (show === isOpen) {
      return
    }
    setTimeout(() => setIsOpen(val), 0)
    if (fade) {
      setIsTransitioning(setTimeout(() => {
        setIsTransitioning(false)
        val ? onOpened && onOpened() : onClosed && onClosed()
      }, 150))
    }
  }

  const modalClasses = mapToCssModules(classNames(
    'modal overflow-auto', {
      'fade': fade,
      'show': isOpen,
      'd-block': isOpen || isTransitioning,
      [`modal-${color}`]: color
    }
  ), cssModule)

  const dialogClasses = mapToCssModules(classNames(
    'modal-dialog', {
      'modal-dialog-centered': centered,
      [`modal-${size}`]: size
    }
  ), cssModule)

  const contentClasses = mapToCssModules(classNames(
    'modal-content', {
      [`border-${borderColor}`]: borderColor,
    },
    addContentClass
  ), cssModule)

  const backdropClasses = mapToCssModules(classNames({
    'modal-backdrop': true,
    'fade': fade,
    'show': isOpen || fade
  }), cssModule)

  return (
    <div onClick={modalClick}>
      <div
        tabIndex="-1"
        role="dialog"
        className={modalClasses}
        data-modal={true}
      >
        <div className={dialogClasses} role="document">
          <div {...attributes} className={contentClasses} ref={innerRef}>
            <Context.Provider value={{close}}>
              {props.children}
            </Context.Provider>
          </div>
        </div>
      </div>
      {backdrop && isOpen ? 
      <div className={backdropClasses}></div> : ''}
    </div>
  )
}

CModal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  show: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.oneOf(['', 'sm', 'lg', 'xl']),
  backdrop: PropTypes.bool,
  color: PropTypes.string, 
  borderColor: PropTypes.string,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  closeOnBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
  addContentClass: PropTypes.string
};

CModal.defaultProps = {
  backdrop: true,
  fade: true,
  closeOnBackdrop: true
};

export default CModal
