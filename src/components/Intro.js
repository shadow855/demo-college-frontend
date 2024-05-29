import React from 'react'
import logo from '../images/vbspu logo.png';
import '../css folder/intro.css';

const Intro = () => {
    // Check if the screen width is less than or equal to 991px
    function checkScreenWidth() {
        const title = document.getElementById("name");
        if (window.innerWidth <= 991) {
            title.innerHTML = "Department of Financial Studies<br>VBSPU, Jaunpur.";
        }
    }

    // Call the function when the page loads and when the window is resized
    window.addEventListener("load", checkScreenWidth);
    window.addEventListener("resize", checkScreenWidth);

    return (
        <>
            <div className="container">
                <div className="card mx-5" style={{ maxWidth: '100%', border: 'none' }}>
                    <div className="row g-0">
                        <div className="col-md-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={logo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h5 className="card-title" id="name">Department of Financial Studies, VBSPU, Jaunpur.</h5>
                            </div>
                        </div>
                    </div>
                    <hr style={{ height: '3px', backgroundColor: '#000000', border: 'none' }}></hr>
                </div>
            </div>
        </>
    )
}

export default Intro