import axios from "axios";
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { URL } from "../App";


const EventsAdd = () => {
    //adding events to database
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

    const addEvents = async (e) => {
        e.preventDefault();

        const formDataWithPhoto = new FormData();
        formDataWithPhoto.append('title', title);
        formDataWithPhoto.append('description', description);
        formDataWithPhoto.append('link', link);
        formDataWithPhoto.append('date', date);
        formDataWithPhoto.append('photo', photo); // Append the photo to the FormData

        if (title === "" || description === "" || link === "" || date === "" || photo === null) {
            return toast.error("Please fill all details.");
        }

        try {
            await axios.post(`${URL}/api/events`, formDataWithPhoto, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Event added successfully");
            setFormData({ ...formData, photo: null, title: "", description: "", link: "", date: "" });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container my-5">
                <form onSubmit={addEvents} encType="multipart/form-data">
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
                    <button type="submit" className="btn btn-primary">Add</button>
                    <br />
                </form>
            </div>
        </>
    )
}

export default EventsAdd