import axios from "axios";
import React, { useState, useEffect } from 'react'
import { URL } from "../App";
import { toast } from "react-toastify";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import loader from "../images/loader.gif";

const AnnouncementEdit = () => {

    //getting announcements from database
    const [announcements, setAnnouncements] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchAnnouncements = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${URL}/api/announcement`);
            setAnnouncements(response.data);
            setIsLoading(false);
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);


    //adding announcements to database
    const [formData, setFormData] = useState({
        name: "",
    })

    const { name } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addAnnouncement = async (e) => {
        e.preventDefault();

        if (name === "") {
            return toast.error("Please fill all details.");
        }
        if (name.length > 100) {
            return toast.error("Announcement should be 100 characters or less.");
        }

        try {
            // Check the current number of announcements
            if (announcements.length >= 3) {
                return toast.error("You can't add more than 3 announcements.");
            }

            await axios.post(`${URL}/api/announcement`, formData);
            toast.success("Announcement added successfully");
            setFormData({ ...formData, name: "" });
        } catch (error) {
            console.log(error);
        }
    };

    //deleting announcements from database
    const deleteAnnouncement = async (id) => {
        try {
            await axios.delete(`${URL}/api/announcement/${id}`);
            toast.success("Announcement deleted successfully");
            fetchAnnouncements();
        } catch (error) {
            toast.error(error.message);
        }
    }

    //editing announcement
    const [isEditing, setIsEditing] = useState(false);
    const [announcementID, setAnnouncementID] = useState("");

    const getSingleAnnouncement = async (profile) => {
        setFormData({ name: profile.name });
        setAnnouncementID(profile._id);
        setIsEditing(true);
    }

    const updateAnnouncement = async (e) => {
        e.preventDefault();

        if (name === "") {
            return toast.error("Please fill all details.");
        }
        if (name.length > 100) {
            return toast.error("Announcement should be 100 characters or less.");
        }

        try {
            await axios.put(`${URL}/api/announcement/${announcementID}`, formData);
            toast.success("Announcement edited successfully");
            setFormData({ ...formData, name: "" });
            setIsEditing(false);
            fetchAnnouncements();
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    return (
        <>
            <div className="container my-5">
                <form onSubmit={isEditing ? updateAnnouncement : addAnnouncement}>
                    <div className="form-floating mb-3">
                        <input type="text" name="name" value={name} onChange={handleInputChange} className="form-control" id="floatingInputname" placeholder="" />
                        <label htmlFor="floatingInputname">Announcement</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">{isEditing ? "Edit" : "Add"}</button>
                    <br />
                </form>
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
                !isLoading && announcements.length === 0 ? (
                    <div className="loader">No Announcements Found.</div>
                ) : (
                    <div className="container table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ textAlign: 'center' }}>Announcement</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {announcements.map(profile => (
                                    <tr key={profile._id}>
                                        <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.name}>{profile.name}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <FaEdit color='purple' style={{ cursor: 'pointer' }} onClick={() => getSingleAnnouncement(profile)} /> &emsp;&emsp;
                                            <FaRegTrashAlt color='red' style={{ cursor: 'pointer' }} onClick={() => deleteAnnouncement(profile._id)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </>
    )
}

export default AnnouncementEdit
