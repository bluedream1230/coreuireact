import React, { FC } from 'react'

import CIcon from '@coreui/icons-react'
import { cibGithub, cibTwitter, cilCloudDownload, cilMenu } from '@coreui/icons'
import { CButton, CHeader, CHeaderNav, CHeaderToggler, CNavItem } from '@coreui/react'

import { AppContext } from './../AppContext'

const Header: FC = () => {
  return (
    <>
      <AppContext.Consumer>
        {(context) => (
          <CHeader className="mb-5" position="sticky">
            <CHeaderToggler
              className="ms-md-3"
              onClick={() => {
                context.setSidebarVisible && context.setSidebarVisible(!context.sidebarVisible)
              }}
            >
              <CIcon icon={cilMenu} size="lg" />
            </CHeaderToggler>
            <CHeaderNav className="ms-auto">
              <CNavItem href="https://github.com/coreui/coreui-react/">
                <CIcon icon={cibGithub} size="xl" />
              </CNavItem>
              <CNavItem href="https://twitter.com/core_ui">
                <CIcon icon={cibTwitter} size="xl" />
              </CNavItem>
            </CHeaderNav>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/react/#compare"
              variant="outline"
            >
              <CIcon icon={cilCloudDownload} /> Download
            </CButton>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/pro/react/"
            >
              Get CoreUI PRO
            </CButton>
          </CHeader>
        )}
      </AppContext.Consumer>
    </>
  )
}

Header.displayName = 'Header'

export default Header
