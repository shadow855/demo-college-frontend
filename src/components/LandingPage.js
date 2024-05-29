import React, { useState, useEffect } from 'react'
import axios from "axios";
import { URL } from "../App";
import loader from "../images/loader.gif";
import { toast } from "react-toastify";
import slideimg1 from '../images/slide-img1.jpg';
import slideimg2 from '../images/slide-img2.jpg';
import slideimg3 from '../images/slide-img3.jpg';
import avatar from '../images/avatar.jpg';
import '../css folder/common_heading.css';
import Marquee from './Marquee';
import { Link } from "react-router-dom";

const LandingPage = () => {

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchEvents = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${URL}/api/events`);
            setEvents(response.data);
            setIsLoading(false);
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Marquee />
            {/* Carousel */}
            <div id="carouselExampleControlsNoTouching" className="carousel slide mb-5" data-bs-touch="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slideimg1} className="d-block w-100 slide-img" alt="File Not found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Our College</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slideimg2} className="d-block w-100 slide-img" alt="File Not found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Our Students</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slideimg3} className="d-block w-100 slide-img" alt="File Not found" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Our Graduates</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Vision/Mission Section */}
            <div className="container mb-5">
                <div className="container display_flexbox">
                    <div className="row row-cols-1 row-cols-md-1 g-4">
                        <div className="col">
                            <div className="card h-100 border-dark mb-3">
                                <div className="card-body">
                                    <h5 className="card-title text-danger" style={{ textAlign: 'center', fontWeight: 'bold' }}>Vision of University</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>The University is committed to be a leading global university, recognised as an excellent centre of learning for quality higher education, to create, disseminate and translate knowledge; imparting inclusive education by imbibing traditional and modern knowledge; inculcating values, morals and ethics aligned with our motto “Tejasvinavadhitamstu".</p>
                                    <p>विश्वविद्यालय एक अग्रणी वैश्विक संस्थान बनने के लिए प्रतिबद्ध है, जो उत्कृष्ट ज्ञान के केंद्र के रूप में प्रतिष्ठित हो जिसमें  गुणवत्तापूर्ण शिक्षा, ज्ञान का सृजन, प्रसार और परिणामन हो; पारंपरिक और आधुनिक ज्ञान को आत्मसात करते हुए समावेशी शिक्षा प्रदान करे तथा हमारे आदर्श वाक्य “तेजस्विनावधितमस्तु” के अनुरूप मूल्यों, नैतिकता और चरित्र का निर्माण करे ।</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-dark mb-3">
                                <div className="card-body">
                                    <h5 className="card-title text-danger" style={{ textAlign: 'center', fontWeight: 'bold' }}>Mission of University</h5>
                                    <div className="card-text" style={{ textAlign: 'justify' }}>
                                        <table className="table table-bordered border-dark">
                                            <thead>
                                                <tr style={{ textAlign: 'center' }}>
                                                    <th scope="col" className="table-dark">English</th>
                                                    <th scope="col" className="table-dark">Hindi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ textAlign: 'justify' }}>
                                                    <td>To create a pool of global leaders, innovators, and entrepreneurs to accelerate the pace of socio-economic and technological development at a regional, national, and global level.</td>
                                                    <td>क्षेत्रीय, राष्ट्रीय और वैश्विक स्तर पर सामाजिक-आर्थिक और तकनीकी विकास को गति देने के लिए वैश्विक नेतृत्व प्रदान करने वाले नवप्रवर्तकों और उद्यमियों का समूह का निर्माण ।</td>
                                                </tr>
                                                <tr style={{ textAlign: 'justify' }}>
                                                    <td>To provide inclusive education with embedded skills for continuous quality improvement and enhance the social and human indices of the nation.</td>
                                                    <td>गुणवत्ता उन्नयन की निरंतरता हेतु अंतर्निहित कौशल के साथ समावेशी शिक्षा प्रदान करना और राष्ट्र के सामाजिक और मानवीय सूचकांकों को बढ़ाना ।</td>
                                                </tr>
                                                <tr style={{ textAlign: 'justify' }}>
                                                    <td>To engage with local and regional community through extension activities so that the benefit of higher education percolates to society at large.</td>
                                                    <td>विस्तार कार्यक्रमों के माध्यम से स्थानीय और क्षेत्रीय समुदाय के साथ जुड़ना ताकि उच्च शिक्षा का लाभ वृहद रुप से  सामाजिक स्तर पर पहुंच सके ।</td>
                                                </tr>
                                                <tr style={{ textAlign: 'justify' }}>
                                                    <td>To encourage interdisciplinary and collaborative research, innovation and development.</td>
                                                    <td>अंतर्विषयी और सहयोगी अनुसंधान, नवाचार और विकास को प्रोत्साहन ।</td>
                                                </tr>
                                                <tr style={{ textAlign: 'justify' }}>
                                                    <td>To create ethically conscious and responsible citizens who will lead towards a sustainable world.</td>
                                                    <td>नैतिक रूप से जागरूक और उत्तरदायी नागरिकों का निर्माण करना जो विश्व के सतत विकास में सहायक हो ।</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-dark mb-3">
                                <div className="card-body">
                                    <h5 className="card-title text-danger" style={{ textAlign: 'center', fontWeight: 'bold' }}>Vision of Department</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>Reaching new heights of academic excellence and setting a new parameter of performance in teaching, learning and evaluation, Research, consultancy and extension, infrastructure and learning resources, students support and progression, organization and management and healthy practices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-dark mb-3">
                                <div className="card-body">
                                    <h5 className="card-title text-danger" style={{ textAlign: 'center', fontWeight: 'bold' }}>Mission of Department</h5>
                                    <ol className="card-text" style={{ textAlign: 'justify' }}>
                                        <li>Creating minimum mandatory national standards benchmarked to the best in the country.</li>
                                        <li>Strengthening campus by recruitment learned facilities.</li>
                                        <li>Improving infrastructural facilities for teaching, Research and administration etc.</li>
                                        <li>Ensuring delivery of best quality of education and teaching through audio and visual aids.</li>
                                        <li>Strengthen the students and faculties by organizing seminar/conference /workshop, guest lectures by eminent scholar academic exchange program at national and international level etc.</li>
                                        <li>Collaboration of University with leading business school, University and industry etc.</li>
                                        <li>To conduct orientation /refresher course for colleges/University lecturers.</li>
                                        <li>Restructuring the present courses running in the campus as per UGC/AICTE norms.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Words Section */}
            <div className="container mb-5">
                <div className="container display_flexbox">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 border-dark">
                                <div className="headcardcontainer">
                                    <img src={avatar} className="card-img-top headcard" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title head-title text-danger">Head</h5>
                                    <p className="card-text head-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium provident fugit culpa, minima natus nostrum accusamus rem error ipsam earum deserunt voluptatibus officiis a quos temporibus cupiditate asperiores? Iste?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-dark">
                                <div className="headcardcontainer">
                                    <img src={avatar} className="card-img-top headcard" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title head-title text-danger">Dean</h5>
                                    <p className="card-text head-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione. Ipsum eaque, fuga cum ex exercitationem omnis sunt ipsam nam, ratione numquam expedita cumque in hic iste, recusandae adipisci iusto!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-dark">
                                <div className="headcardcontainer">
                                    <img src={avatar} className="card-img-top headcard" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title head-title text-danger">Vice Chancellor</h5>
                                    <p className="card-text head-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi odit dicta maiores repudiandae facilis sunt reprehenderit, veniam commodi assumenda consequuntur doloribus voluptas asperiores alias nihil tempora laborum sapiente, sit provident!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Events Section */}
            <div className="container mb-5">
                <div className="row">
                    <div className="inner_row">
                        <p className="h2 common_heading">Events</p>
                    </div>
                    <div className="container view_all">
                        <Link to="/events" title="View ALL Events" className='news_view_all'>View All Events&gt;</Link>
                    </div>
                </div>
                <hr />
                {
                    isLoading && (
                        <div className="loader">
                            <img src={loader} alt="loading" />
                        </div>
                    )
                }

                {
                    !isLoading && events.length === 0 ? (
                        <div className="loader">No Events Found.</div>
                    ) : (
                        <div className="container my-5">
                            <div className="container display_flexbox">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {
                                        events.slice(0, 3).map(event => (
                                            <div className="col" key={event._id}>
                                                <div className="card h-100">
                                                    <img src={`data:image/png;base64,${event.photo}`}
                                                        className="card-img-top" alt={event.title}
                                                        style={{ height: '300px' }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title" >{event.title}</h5>
                                                        <p className="card-text" style={{ textAlign: 'justify' }}>{event.description}</p>
                                                        <Link to={event.link} className="btn btn-primary" target="_blank">View Full News</Link>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="text-body-secondary">{event.date}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default LandingPage