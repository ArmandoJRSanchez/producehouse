
import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShopingCartProvider } from '../../Context'

import Home from '../Home'
import Contacto from '../Contacto'
import Nosotros from '../Nosotros'
import Carrito from '../Carrito'
import Busqueda from '../Busqueda'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Layout from '../../Components/Layout'
import './App.css'
import CartDetail from '../../Components/CartDetail'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/tienda', element: <Home /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/carrito', element: <Carrito /> },
    { path: '/busqueda', element: <Busqueda /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes;
}


function App() {

  return (
    <>
      <ShopingCartProvider>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
          <CartDetail />
          <Navbar />
          <Footer />
        </BrowserRouter>
      </ShopingCartProvider>

    </>
  )
}

export default App
