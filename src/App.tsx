import { ThemeProvider } from 'styled-components'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.min.css'
import { Routes } from './routes'
import { AuthStoreContext } from './store'
import { theme } from './styles'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ToastProvider>
        <AuthStoreContext>
          <Routes />
        </AuthStoreContext>
      </ToastProvider>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
