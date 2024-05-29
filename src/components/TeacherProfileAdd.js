import axios from "axios";
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { URL } from "../App";


const TeacherProfileAdd = () => {

    //adding job profiles to database
    const [formData, setFormData] = useState({
        photo: null,
        name: "",
        designation: "",
        contact: "",
        email: "",
    })

    const { photo, name, designation, contact, email } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo: file });
    };

    const addTeacherProfile = async (e) => {
        e.preventDefault();

        const formDataWithPhoto = new FormData();
        formDataWithPhoto.append('name', name);
        formDataWithPhoto.append('designation', designation);
        formDataWithPhoto.append('contact', contact);
        formDataWithPhoto.append('email', email);
        formDataWithPhoto.append('photo', photo); // Append the photo to the FormData

        if (name === "" || designation === "" || contact === "" || email === "" || photo === null) {
            return toast.error("Please fill all details.");
        }

        if (isNaN(contact)) {
            return toast.error("Please fill only numbers in contact.");
        }

        try {
            await axios.post(`${URL}/api/teacher`, formDataWithPhoto, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Teacher Profile added successfully");
            setFormData({ ...formData, photo: null, name: "", designation: "", contact: "", email: "" });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container my-5">
                <form onSubmit={addTeacherProfile} encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Photo</label>
                        <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="name" value={name} onChange={handleInputChange} className="form-control" id="floatingInputname" placeholder="" />
                        <label htmlFor="floatingInputname">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="designation" value={designation} onChange={handleInputChange} className="form-control" id="floatingInputbatch" placeholder="" />
                        <label htmlFor="floatingInputbatch">Designation</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="contact" value={contact} onChange={handleInputChange} className="form-control" id="floatingInputcontact" placeholder="" />
                        <label htmlFor="floatingInputcontact">Contact No.</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" name="email" value={email} onChange={handleInputChange} className="form-control" id="floatingInputemail" placeholder="" />
                        <label htmlFor="floatingInputemail">Email</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Add</button>
                    <br />
                </form>
            </div>
        </>
    )
}

export default TeacherProfileAdd