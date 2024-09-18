import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// const router = createBrowserRouter([

//   { path:'/', element: <App />},
// ])
//<RouterProvide router={router}/>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
