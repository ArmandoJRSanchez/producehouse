import SliderComponent from "../../Components/Slider"
import ParaTi from "../../Components/ParaTi"
import ProductosCategory from "../../Components/ProductosCarousel"

import Tienda from '../Tienda'

function Home() {
    return (
        <>
            <SliderComponent />
            <ProductosCategory />

            <ParaTi />

            <Tienda />
        </>
    )
}


export default Home
