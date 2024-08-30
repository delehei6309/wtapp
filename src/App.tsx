import router from './router';
import { ToastPosition, Toaster } from 'react-hot-toast'
import ThemeComponent from './@core/theme/ThemeComponent'
import { RouterProvider } from 'react-router-dom'

import { ModalProvider } from './context/ModalContext';

import { SettingsConsumer, SettingsProvider } from './@core/context/settingsContext';
import Loading from './components/loading';
import Box from '@mui/material/Box';
import './styles/jodit.css';
import './App.css';

function App() {
    return <SettingsProvider pageSettings={{}}>
        <SettingsConsumer>
            {({ settings }) => {
                return (
                    <ThemeComponent settings={settings}>
                        <ModalProvider>
                            <RouterProvider router={router} />
                        </ModalProvider>
                        <Toaster position={settings.toastPosition as ToastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                        <Box id="sinbbad-loading-wrap" display="none"><Loading /></Box>
                    </ThemeComponent>
                )
            }}
        </SettingsConsumer>
    </SettingsProvider>
}
export default App;
