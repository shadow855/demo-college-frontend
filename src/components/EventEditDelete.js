import axios from "axios";
import React, { useState, useEffect } from 'react'
import '../css folder/jobprofile.css';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { URL } from "../App";
import loader from "../images/loader.gif";
import { toast } from "react-toastify";

const EventEditDelete = () => {
    //getting events from database
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchEvents = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${URL}/api/events`);
            console.log(response.json)
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

    //deleting events from database
    const deleteEvent = async (id) => {
        try {
            await axios.delete(`${URL}/api/events/${id}`);
            toast.success("Event deleted successfully");
            fetchEvents();
        } catch (error) {
            toast.error(error.message);
        }
    }

    //editing events from database

    const [editingEvent, setEditingEvent] = useState(null);
    const [eventId, setEventId] = useState("");

    const [formData, setFormData] = useState({
        photo: null,
        title: "",
        description: "",
        link: "",
        date: "",
    })

    const { photo, title, description, link, date } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo: file });
    };

    const getSingleEvent = async (event) => {
        try {
            setEditingEvent(event);
            setEventId(event._id);
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (editingEvent) {
            setFormData({
                photo: editingEvent.photo,
                title: editingEvent.title,
                description: editingEvent.description,
                link: editingEvent.link,
                date: editingEvent.date,
            });
        }
    }, [editingEvent]);

    const updateEvent = async (e) => {
        e.preventDefault();

        if (title === "" || description === "" || link === "" || date === "") {
            return toast.error("Please fill all details.");
        }

        if (!photo) {
            return toast.error("Please select an image.");
        }
        const updateData = { title, description, link, date };

        if (formData.photo) {
            updateData.photo = formData.photo;
        }

        try {
            const formDataToSend = new FormData();
            Object.keys(updateData).forEach(key => {
                formDataToSend.append(key, updateData[key]);
            });

            await axios.put(`${URL}/api/events/${eventId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success("Event edited successfully");
            setFormData({
                ...formData,
                photo: null,
                title: "",
                description: "",
                link: "",
                date: ""
            });
            fetchEvents();
        } catch (error) {
            toast.error(error.message);
        }
    }

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
                    <div className="container table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ textAlign: 'center' }}>Photo</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Title</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Description</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Link</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Date</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map(event => (
                                    <tr key={event._id}>
                                        <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top">
                                            <img
                                                src={`data:image/png;base64,${event.photo}`}
                                                alt={event.name}
                                                style={{ maxWidth: '100px', maxHeight: '100px' }} // Set maxWidth and maxHeight
                                            />
                                        </td>
                                        <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={event.title}>{event.title}</td>
                                        <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={event.description}>{event.description}</td>
                                        <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={event.link}>{event.link}</td>
                                        <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={event.date}>{event.date}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => getSingleEvent(event)}>
                                                <FaEdit color='purple' style={{ cursor: 'pointer' }} /> &emsp;&emsp;
                                            </button>
                                            <FaRegTrashAlt color='red' style={{ cursor: 'pointer' }} onClick={() => deleteEvent(event._id)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Event</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateEvent} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Photo</label>
                                    <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="title" value={title} onChange={handleInputChange} className="form-control" id="floatingInputname" placeholder="" />
                                    <label htmlFor="floatingInputname">Title</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="description" value={description} onChange={handleInputChange} className="form-control" id="floatingInputbatch" placeholder="" />
                                    <label htmlFor="floatingInputbatch">Description</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="link" value={link} onChange={handleInputChange} className="form-control" id="floatingInputcompany" placeholder="" />
                                    <label htmlFor="floatingInputcompany">Link</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="date" value={date} onChange={handleInputChange} className="form-control" id="floatingInputposition" placeholder="" />
                                    <label htmlFor="floatingInputposition">Date</label>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">Edit</button>
                                <br />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventEditDelete