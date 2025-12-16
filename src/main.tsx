import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.ts'
import { store } from './redux/store'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </StrictMode>
  </Provider>,
)
