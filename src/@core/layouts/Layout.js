// ** React Import
import { useEffect } from 'react'

// ** Layout Components
import VerticalLayout from './VerticalLayout'

const Layout = props => {
  // ** Props
  const { hidden, children, settings, saveSettings } = props
  useEffect(() => {
    if (hidden) {
      saveSettings({ ...settings, layout: 'vertical' })
    } else {
      saveSettings({ ...settings, layout: settings.lastLayout })
    }
    // eslint-disable-next-line
  }, [hidden])
  
  return <VerticalLayout {...props}>{children}</VerticalLayout>
}

export default Layout
