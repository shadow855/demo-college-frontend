import axios from "axios";
import React, { useState, useEffect } from 'react'
import '../css folder/jobprofile.css';
import { URL } from "../App";
import { toast } from "react-toastify";
import loader from "../images/loader.gif";

const JobProfile = () => {

  //getting job profiles from database
  const [jobProfiles, setJobProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchJobProfiles = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${URL}/api/jobprofile`);
      setJobProfiles(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobProfiles();
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
        !isLoading && jobProfiles.length === 0 ? (
          <div className="loader">No Job Profiles Found.</div>
        ) : (
          <div className="container table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'center' }}>Photo</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Name</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Batch</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Company</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Position</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Address</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Contact No.</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Email</th>
                  <th scope="col" style={{ textAlign: 'center' }}>Previous Experience</th>
                </tr>
              </thead>
              <tbody>
                {jobProfiles.map(profile => (
                  <tr key={profile._id}>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.photo}>
                      <img
                        src={`data:image/png;base64,${profile.photo}`}
                        alt={profile.name}
                        style={{ maxWidth: '100px', maxHeight: '100px' }} // Set maxWidth and maxHeight
                      />
                    </td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.name}>{profile.name}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.batch}>{profile.batch}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.company}>{profile.company}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.position}>{profile.position}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.address}>{profile.address}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.contact}>{profile.contact}</td>
                    <td className="td-css" style={{ textAlign: 'center' }} data-bs-toggle="tooltip" data-bs-placement="top" title={profile.email}>{profile.email}</td>
                    <td style={{ textAlign: 'center' }}>
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <div className="dropdown-menu p-4 text-body-secondary" style={{ minWidth: "500px" }}>
                          <p>
                            {profile.experience}
                          </p>
                        </div>
                      </div>
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

export default JobProfile