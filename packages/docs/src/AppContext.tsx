import React from 'react'

export interface AppContextProps {
  name?: string
  sidebarVisible?: boolean | undefined
  setSidebarVisible?: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const AppContextInitialState: AppContextProps = {
  name: 'DocsContext',
}

export const AppContext = React.createContext(AppContextInitialState)
