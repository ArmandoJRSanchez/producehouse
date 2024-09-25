import HeaderSection from "../../Components/HeaderSection"
import BodySection from "../../Components/BodySection"
import pattern from '../../assets/img/icons/white-pattern.png'
import logo from '../../assets/img/logo/Logo_PHCV.svg'
import secimg7 from '../App/extra/sec-img-7.png'
import secimg8 from '../App/extra/sec-img-8.png'
import feature1 from '../App/extra/feature-1.png'
import feature2 from '../App/extra/feature-2.png'
import feature3 from '../App/extra/feature-3.png'
import feature4 from '../App/extra/feature-4.png'
import feature from '../App/extra/feature.png'

function Nosotros() {
    return (
        <>
            <section className="mt-20 w-full">
                <HeaderSection
                    titulo="Nosotros"
                />
                <BodySection>
                <img
                alt=""
                src={secimg7}
                className="left-bottom-img"
                />
                <img
                alt=""
                src={secimg8}
                className="right-top-img"
                />

                <div className="pattern">
                <img alt="" src={pattern} />
                </div>
                <div className="section-icon flex flex-col justify-center items-center">
                <img alt="" src={logo} className="w-24"/>
                
                </div>

                <div className="container rel-div">
                <div className="row">
                    <div className="col-sm-6 text-right fsz-16 pt-15 xs-text">
                    <p>
                    Produce house en una página web donde podrás realizar compras de una gran variedad de productos como frutas y vegetales como también abarrotes, podrás recibirlas comprandolas desde internet visitanos y haz que tu negocio tenga los productos de alta calidad a tu alcance
                    </p>
                    </div>
                    <div className="col-sm-6 text-left xs-text">
                    <h2 className="section-title">
                        <span className="light-font">Tenemos la mejor </span>
                        <strong
                        >logística y atención
                        {/* <img src="assets/img/icons/logo-icon.png" alt="" /> */}
                        </strong>
                    </h2>
                    <h4 className="sub-title">al cliente para que tus productos lleguen frescos y en tiempo y forma
                    </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 text-center">
                    <div className="feature-wrap flex flex-col justify-center items-center">
                        <img src={feature1} alt="" />
                        <h3 className="title-1 ptb-15">
                        <span className="light-font">De produce House 
                        </span>
                        <strong> a tu Hotel </strong>
                        </h3>
                        
                        <a href="#" className="sm-bnt-wht">Ver más</a>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                    <div className="feature-wrap flex flex-col justify-center items-center">
                        <img src={feature2} alt="" />
                        <h3 className="title-1 ptb-15">
                        <span className="light-font"> De produce House </span>
                        <strong> a tu Casa
                        </strong>
                        </h3>
                        
                        <a href="#" className="sm-bnt-wht">Ver más</a>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                    <div className="feature-wrap flex flex-col justify-center items-center">
                        <img src={feature3} alt="" />
                        <h3 className="title-1 ptb-15">
                        <span className="light-font">De produce House
                        </span>
                        <strong> a tu Restaurante</strong>
                        </h3>
                        
                        <a href="#" className="sm-bnt-wht">Ver más</a>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                    <div className="feature-wrap flex flex-col justify-center items-center">
                        <img src={feature4} alt="" />
                        <h3 className="title-1 ptb-15">
                        <span className="light-font">De produce House </span> <strong>a tu negocio</strong>
                        </h3>
                        
                        <a href="#" className="sm-bnt-wht">Ver más</a>
                    </div>
                    </div>
                </div>

                <div className="rel-div mt-20 flex items-center justify-center">
                    <img src={feature} alt="" />
                </div>
                </div>
                </BodySection>
            </section>   
        </>
    )
}


export default Nosotros
