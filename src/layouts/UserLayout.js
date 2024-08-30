import { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from '../@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from '../navigation'
// import HorizontalNavItems from 'src/navigation/horizontal'

// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'

import VerticalAppBarContent from './components/vertical/AppBarContent'
// import HorizontalAppBarContent from './components/horizontal/AppBarContent'

// ** Hook Import
import { useSettings } from '../@core/hooks/useSettings'

import { useAuth } from '../hooks'

const UserLayout = ({ children, ...other }) => {
    // ** Hooks
    const { settings, saveSettings } = useSettings()

    const { user, setUser, menuKey, setMenuKey } = useAuth();
    useEffect(() => {
        setMenuKey(other.menuKey);
    }, [other])

    const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))
    return (
        <Layout
            hidden={hidden}
            settings={settings}
            saveSettings={saveSettings}
            verticalNavItems={VerticalNavItems(menuKey)}
            verticalAppBarContent={props => (
            <VerticalAppBarContent
                hidden={hidden}
                settings={settings}
                saveSettings={saveSettings}
                setShowBackdrop={props.setShowBackdrop}
                toggleNavVisibility={props.toggleNavVisibility}
                />
            )} >
            {children}
        </Layout>
    )
}

export default UserLayout
