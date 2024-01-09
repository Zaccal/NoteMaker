import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import store, { persistor } from './store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeContextProvider from './theme/ThemeContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeContextProvider>
                        <App />
                    </ThemeContextProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
