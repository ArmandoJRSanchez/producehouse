import { createContext, useState } from "react"
import Carrito from "../Pages/Carrito";

export const ShopingCartContext = createContext()

const productos = [
  { nombre: 'Mango', descripcion: 'Mango Haden', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Platano', descripcion: 'Platano Chiapas Select', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Naranja', descripcion: 'Naranja Navel', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Fresa', descripcion: 'Fresa Selecta', cantidad: 'Kilo (caja)', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Uva', descripcion: 'Uva Selecta', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Durazno', descripcion: 'Durazno Melocoton', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Jicama', descripcion: 'Jicama de agua', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Pera', descripcion: 'Pera Bosco', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Manzana roja', descripcion: 'Manzana roja Selecta', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Melon Chino', descripcion: 'Melon Chino', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Papaya', descripcion: 'Papaya Maradol', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Coco Rayado', descripcion: 'Coco Rayado PH', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Cerezas', descripcion: 'Cerezas PH', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Arandano', descripcion: 'Arandano PH', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Piña', descripcion: 'Pina dulce', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Sandia', descripcion: 'Sandia', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Guayaba', descripcion: 'Guayaba PH', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Ciruela', descripcion: 'Ciruela PH', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Mora Azul', descripcion: 'Mora Azul Selecta', cantidad: 'Canasta', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Frambuesa', descripcion: 'Frambuesas Selecta', cantidad: 'Canasta', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Pera', descripcion: 'Pera Angel', cantidad: 'Kilo', precio: 0.0, categoria: 'frutas' },
  { nombre: 'Aguacate', descripcion: 'Aguacate hass', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Jitomate', descripcion: 'Jitomate Saladette', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Limon', descripcion: 'Limon sin semillas', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Papa', descripcion: 'Papa blanca', cantidad: 'Kilo o Costal', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Cebolla', descripcion: 'Cebolla blanca Selecta', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Nopal', descripcion: 'Nopal', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Morron Verde', descripcion: 'Morron Selecto', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Apio', descripcion: 'Apio PH', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Betabel', descripcion: 'Betabel PH', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Germinado alfalfa', descripcion: 'Germinado alfalfa', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Lechuga Romana', descripcion: 'Lechuga Romana', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Morron rojo', descripcion: 'Morron Selecto', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Cilantro', descripcion: 'Cilantro ph', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Chile Serrano', descripcion: 'Chile Serrano Selecto', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Espinaca', descripcion: 'Espinaca fresca ph', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Zanahoria', descripcion: 'Zanahoria Selecta', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Ajo', descripcion: 'Ajo fresco', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Pepino', descripcion: 'Pepino selecto', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Esparragos', descripcion: 'Esparragos Selecto', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Brocoli', descripcion: 'Brocoli ph', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Col', descripcion: 'Coliflor', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Calabaza', descripcion: 'Calabaza Selecta', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Tomate', descripcion: 'Tomate Saladette', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Elote', descripcion: 'Elote tierno', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Camote', descripcion: 'Camote', cantidad: 'Kilo', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Verdura', descripcion: 'Verdura para caldo', cantidad: 'Paquete', precio: 0.0, categoria: 'vegetales' },
  { nombre: 'Sal Fina', descripcion: 'Sal Fina', cantidad: 'Pieza', precio: 0.0, categoria: 'varios' },
  { nombre: 'Platos desechables', descripcion: 'Platos desechables', cantidad: 'Bolsa (50)', precio: 0.0, categoria: 'varios' },
  { nombre: 'Vasos desechables', descripcion: 'Vasos desechables', cantidad: 'Bolsa (50)', precio: 0.0, categoria: 'varios' },
  { nombre: 'Harina', descripcion: 'Harina de Trigo', cantidad: 'Kilo (una bolsa)', precio: 0.0, categoria: 'varios' },
  { nombre: 'Piedra', descripcion: 'Piedra para plancha', cantidad: '4 (paquete)', precio: 0.0, categoria: 'varios' },
  { nombre: 'Tomate en lata', descripcion: 'Pure de tomate', cantidad: 'Pieza', precio: 0.0, categoria: 'varios' },
  { nombre: 'Huevo', descripcion: 'Huevo blanco cartera', cantidad: 'Kilo', precio: 0.0, categoria: 'varios' },
  { nombre: 'Vainilla', descripcion: 'Vainilla liquida', cantidad: 'Frasco', precio: 0.0, categoria: 'varios' },
  { nombre: 'Levadura', descripcion: 'Levadura', cantidad: 'Paquete', precio: 0.0, categoria: 'varios' }
];

const categorias = [
  { id: 1, nombre: 'Frutas', descripcion: 'descricpcion' },
  { id: 2, nombre: 'Vegetales', descripcion: 'descricpcion' },
  { id: 3, nombre: 'Varios', descripcion: 'descricpcion' },
];

export const ShopingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  // product detail open/close
  const [isCartDetailOpen, setIsCartDetailOpen] = useState(false)

  const openCartDetail = () => setIsCartDetailOpen(true)
  const closeCartDetail = () => setIsCartDetailOpen(false)

  // product detail - show product

  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart - add products to cart 

  const [cartProduct, setCartProduct] = useState([])
  // cantidad de kilos, items, bolsas, etc... que estan en el Carrito

  console.log(cartProduct);

  // productos de la tienda
  const [products, setProducts] = useState(productos)
  const [catalog, setCatalog] = useState(productos)
  const [category, setCategory] = useState(categorias)


  return (
    <ShopingCartContext.Provider value={{
      count,
      setCount,
      openCartDetail,
      closeCartDetail,
      isCartDetailOpen,
      productToShow,
      setProductToShow,
      cartProduct,
      setCartProduct,
      products,
      setProducts, catalog, setCatalog, category, setCategory,
    }}>
      {children}
    </ShopingCartContext.Provider>
  )
}
