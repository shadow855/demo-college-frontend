import axios from "axios";
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { URL } from "../App";

const JobProfileAdd = () => {
    //adding job profiles to database
    const [formData, setFormData] = useState({
        photo: null,
        name: "",
        batch: "",
        company: "",
        position: "",
        address: "",
        contact: "",
        email: "",
        experience: "",
    })

    const { photo, name, batch, company, position, address, contact, email, experience } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo: file });
    };

    const addJobProfile = async (e) => {
        e.preventDefault();

        const formDataWithPhoto = new FormData();
        formDataWithPhoto.append('name', name);
        formDataWithPhoto.append('batch', batch);
        formDataWithPhoto.append('company', company);
        formDataWithPhoto.append('position', position);
        formDataWithPhoto.append('address', address);
        formDataWithPhoto.append('contact', contact);
        formDataWithPhoto.append('email', email);
        formDataWithPhoto.append('experience', experience);
        formDataWithPhoto.append('photo', photo); // Append the photo to the FormData

        if (name === "" || batch === "" || company === "" || position === "" || address === "" || contact === "" || email === "" || experience === "" || photo === null) {
            return toast.error("Please fill all details.");
        }

        if (isNaN(contact)) {
            return toast.error("Please fill only numbers in contact.");
        }

        try {
            await axios.post(`${URL}/api/jobprofile`, formDataWithPhoto, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Job Profile added successfully");
            setFormData({ ...formData, photo: null, name: "", batch: "", company: "", position: "", address: "", contact: "", email: "", experience: "" });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="container my-5">
                <form onSubmit={addJobProfile} encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Photo</label>
                        <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="name" value={name} onChange={handleInputChange} className="form-control" id="floatingInputname" placeholder="" />
                        <label htmlFor="floatingInputname">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="batch" value={batch} onChange={handleInputChange} className="form-control" id="floatingInputbatch" placeholder="" />
                        <label htmlFor="floatingInputbatch">Batch</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="company" value={company} onChange={handleInputChange} className="form-control" id="floatingInputcompany" placeholder="" />
                        <label htmlFor="floatingInputcompany">Company</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="position" value={position} onChange={handleInputChange} className="form-control" id="floatingInputposition" placeholder="" />
                        <label htmlFor="floatingInputposition">Position</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="address" value={address} onChange={handleInputChange} className="form-control" id="floatingInputaddress" placeholder="" />
                        <label htmlFor="floatingInputaddress">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="contact" value={contact} onChange={handleInputChange} className="form-control" id="floatingInputcontact" placeholder="" />
                        <label htmlFor="floatingInputcontact">Contact No.</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" name="email" value={email} onChange={handleInputChange} className="form-control" id="floatingInputemail" placeholder="" />
                        <label htmlFor="floatingInputemail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="experience" value={experience} onChange={handleInputChange} className="form-control" id="floatingInputexperience" placeholder="" />
                        <label htmlFor="floatingInputexperience">Previous Experience</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Add</button>
                    <br />
                </form>
            </div>
        </>
    )
}

export default JobProfileAdd