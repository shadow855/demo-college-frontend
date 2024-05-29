import axios from "axios";
import React, { useState, useEffect } from 'react'
import '../css folder/jobprofile.css';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { URL } from "../App";
import loader from "../images/loader.gif";
import { toast } from "react-toastify";

const TeacherProfileEditDelete = () => {

  //getting teacher profiles from database
  const [teacherProfiles, setTeacherProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchTeacherProfiles = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${URL}/api/teacher`);
      setTeacherProfiles(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeacherProfiles();
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //deleting teacher profiles from database
  const deleteTeacherProfiles = async (id) => {
    try {
      await axios.delete(`${URL}/api/teacher/${id}`);
      toast.success("Teacher Profile deleted successfully");
      fetchTeacherProfiles();
    } catch (error) {
      toast.error(error.message);
    }
  }

  //editing teacher profiles from database

  const [editingProfile, setEditingProfile] = useState(null);
  const [profileId, setProfileId] = useState("");

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


  const getSingleTeacherProfile = async (profile) => {
    try {
      setEditingProfile(profile);
      setProfileId(profile._id);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (editingProfile) {
      setFormData({
        photo: editingProfile.photo,
        name: editingProfile.name,
        designation: editingProfile.designation,
        contact: editingProfile.contact,
        email: editingProfile.email,
      });
    }
  }, [editingProfile]);

  const updateTeacherProfile = async (e) => {
    e.preventDefault();

    if (name === "" || designation === "" || contact === "" || email === "") {
      return toast.error("Please fill all details.");
    }

    if (isNaN(contact)) {
      return toast.error("Please fill only numbers in contact.");
    }
    if (!photo) {
      return toast.error("Please select an image.");
    }

    const updateData = { name, designation, contact, email };

    if (formData.photo) {
      updateData.photo = formData.photo;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(updateData).forEach(key => {
        formDataToSend.append(key, updateData[key]);
      });

      await axios.put(`${URL}/api/teacher/${profileId}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("Teacher Profile edited successfully");
      setFormData({ ...formData, photo: null, name: "", designation: "", contact: "", email: "" });
      fetchTeacherProfiles();
    } catch (error) {
      toast.error(error.message);
    }
  }

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
        !isLoading && teacherProfiles.length === 0 ? (
          <div className="loader">No Teacher Profiles Found.</div>
        ) : (
          <div className="container table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'center' }}>Photo</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Name</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Designation</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Contact No.</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Email</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {teacherProfiles.map(profile => (
                  <tr key={profile._id}>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top">
                      <img
                        src={`data:image/png;base64,${profile.photo}`}
                        alt={profile.name}
                        style={{ maxWidth: '100px', maxHeight: '100px' }} // Set maxWidth and maxHeight
                      />
                    </td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.name}>{profile.name}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.designation}>{profile.designation}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.contact}>{profile.contact}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.email}>{profile.email}</td>
                    <td style={{ textAlign: 'center' }}>
                      {/* <!-- Button trigger modal --> */}
                      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => getSingleTeacherProfile(profile)}>
                        <FaEdit color='purple' style={{ cursor: 'pointer' }} /> &emsp;&emsp;
                      </button>
                      <FaRegTrashAlt color='red' style={{ cursor: 'pointer' }} onClick={() => deleteTeacherProfiles(profile._id)} />
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
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Teacher Profile</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateTeacherProfile} encType="multipart/form-data">
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

export default TeacherProfileEditDelete