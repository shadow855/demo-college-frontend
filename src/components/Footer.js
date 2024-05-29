import React from 'react'
import pic from '../images/slide-img1.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}

            <footer className="bg-secondary text-center text-lg-start text-black">
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!--Grid row--> */}
                    <div className="row my-4">
                        {/* <!--Grid column--> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                                <img src={pic} style={{ width: '150px', height: '150px', borderRadius: '50%' }} alt=""
                                    loading="lazy" />
                            </div>

                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque tenetur dicta quidem similique! Blanditiis?</p>

                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <Link className="text-black px-2" to="https://www.linkedin.com/in/raiyan-mushtaque-110824254/" target='_blank'>
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black px-2" to="https://github.com/shadow855" target='_blank'>
                                        <i className="bi bi-github"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-black ps-2" to="https://www.instagram.com/shadow_855/" target='_blank'>
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Deaprtments</h5>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Heading2</h5>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#!" className="text-black"><i className="bi bi-arrow-right-circle-fill"></i> Number1</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Contact</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p><i className="bi bi-geo-alt-fill"></i> Shadow, Mirzapur</p>
                                </li>
                                <li>
                                    <p><i className="bi bi-telephone-fill"></i> + 01 234 567 89</p>
                                </li>
                                <li>
                                    <p><i className="bi bi-envelope-fill"></i> raiyanmushtaque@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-black" href="https://mdbootstrap.com/">Shadow</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>

            {/* <!-- End of .container --> */}
        </div>
    )
}

export default Footer