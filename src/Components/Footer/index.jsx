
import { FaHeart } from 'react-icons/fa6';
import logo from '../../assets/img/logo/Logo_PHCH.svg'
import pattern from '../../assets/img/icons/white-pattern.png'
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <footer className="page-footer"> 
                <section className="sec-space light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 footer-widget">
                                <div className="main-logo">
                                    <a href="index.html"> <img className='w-60' alt="" src={logo} />  </a>
                                    <span className="medium-font">Produce House</span>
                                </div>
                                <span className="divider-2"></span>
                                <div className="text-widget">
                                    <p>Tenemos la mejor logistica y atencion al cliente para que tus productos lleguen frescos y en tiempo y forma                                    </p>
                                    <ul>
                                        <li> <i className="fa fa-map-marker"></i> <span> <strong>Ciudad de México,</strong> Mexico</span> </li>
                                        <li> <i className="fa fa-envelope-square"></i> <span><a href="#">contacto@producehouse.com</a> </span> </li>
                                        <li> <i className="fa fa-phone-square"></i> <span><a href="#">www.producehouse.com</a> </span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-4 ">
                                <h2 className="title-1">  <span className="light-font">Produce House  </span> <strong>Información </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="list">
                                    <li> <a href="./nosotros"> Acerca de la tienda </a> </li>
                                    <li> <a href="./blog"> Nuestro Blog </a> </li>
                                    <li> <a href="./tienda"> Nuevos Productos </a> </li>
                                </ul>
                            </div>
                            {/* <div className="col-md-3 col-sm-4 footer-widget">
                                <h2 className="title-1">  <span className="light-font">Mi  </span> <strong>Cuenta </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="list">
                                    <li> <a href="my-account.html"> Cuenta </a> </li>
                                    <li><a href="account-information.html"> A </a></li>
                                    <li><a href="address-book.html"> Address Books</a></li>
                                    <li><a href="order-history.html"> Order History</a></li>
                                    <li><a href="review-rating.html"> Reviews and Ratings</a></li>
                                    <li><a href="return.html"> Returns Requests</a></li>
                                    <li><a href="newsletter.html"> Newsletter</a></li>
                                </ul>
                            </div> */}
                            {/* <div className="col-md-3 col-sm-4 footer-widget">
                                <h2 className="title-1">  <span className="light-font">photo  </span> <strong>instagram </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="instagram-widget">
                                    <li> <a href="#"> <img src="assets/img/extra/80x80-1.jpg" alt="" /> </a> </li>
                                    <li> <a href="#"> <img src="assets/img/extra/80x80-2.jpg" alt="" /> </a> </li>
                                    <li> <a href="#"> <img src="assets/img/extra/80x80-3.jpg" alt="" /> </a> </li>
                                    <li> <a href="#"> <img src="assets/img/extra/80x80-4.jpg" alt="" /> </a> </li>
                                    <li> <a href="#"> <img src="assets/img/extra/80x80-5.jpg" alt="" /> </a> </li>
                                    <li> <a href="#"> <img src="assets/img/extra/80x80-6.jpg" alt="" /> </a> </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className="footer-bottom">
                    <div className="pattern"> 
                        <img alt="" src={pattern} />
                    </div>
                    <div onClick={() => scrollToTop()} className="to-top text-green-400"> <FaArrowAltCircleUp/> </div>
                    <div className="container ptb-50">
                        <div className="row">
                            <div className="col-md-7 col-sm-5">
                                <p className='flex justify-center items-center gap-1'>©2024 <a href="#"> <strong> producehouse.com</strong></a>, diseñado por <FaHeart/> Asicom Graphics, Todos los derechos reservados</p>
                            </div>
                            <div className="col-md-5 col-sm-7">
                                <ul className="primary-navbar footer-menu">
                                    <li> <a href="./contacto">Contacto</a> </li>
                                    <li> <a href="#">Términos de uso  </a> </li>
                                    <li> <a href="#">Políticas de privacidad</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            <div id="to-top-mb" className="to-top mb"> <i className="fa fa-arrow-circle-o-up"></i> </div>
        </>
    );
};

export default Footer;
