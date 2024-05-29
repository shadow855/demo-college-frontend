import axios from "axios";
import React, { useState, useEffect } from 'react'
import '../css folder/jobprofile.css';
import { URL } from "../App";
import { toast } from "react-toastify";
import loader from "../images/loader.gif";

const TeachersProfile = () => {

  //getting job profiles from database
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
                </tr>
              </thead>
              <tbody>
                {teacherProfiles.map(profile => (
                  <tr key={profile._id}>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.photo}>
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

export default TeachersProfile