import React, { useState, useEffect } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../App";
import '../css folder/Announcement.css'; // Import your CSS file

const Marquee = () => {

    //getting announcements from database
    const [announcements, setAnnouncements] = useState([]);


    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get(`${URL}/api/announcement`);
            setAnnouncements(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    return (
        <>
            {announcements.length === 0 ? (
                <div className="loader">No Announcements Found.</div>
            ) : (
                <div className="marquee-container">
                    <div className="marquee-heading">Announcements</div>
                    <div className="marquee-top-container">
                        <div className="marquee-announcement-wrapper">
                            <div className="marquee-announcement-container" >
                                {announcements.map(profile => (
                                    <div key={profile._id}>
                                        <p className="marquee-announcement-item my-1">{profile.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            )
            }
        </>
    );
}

export default Marquee;