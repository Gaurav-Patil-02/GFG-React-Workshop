import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { CardGiftcard } from '@mui/icons-material'
import { CartContextProvider } from './store/cart-context.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <CartContextProvider>
    <App />
    </CartContextProvider>
  </BrowserRouter>

)
