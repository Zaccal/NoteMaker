import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import store, { persistor } from './store/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { themeDarkMode, themeLightMode } from './theme.ts'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeProvider theme={themeDarkMode}>
                        <App />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
