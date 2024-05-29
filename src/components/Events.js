import axios from "axios";
import React, { useState, useEffect } from 'react'
import { URL } from "../App";
import loader from "../images/loader.gif";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";


const Events = () => {

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
                                    events.map(event => (
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
        </>
    )
}

export default Events