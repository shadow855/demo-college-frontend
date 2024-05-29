import React from 'react'
import { Link } from "react-router-dom";
const AdminPage = () => {
    return (
        <>
            <div className="container my-5">
                <div className="container display_flexbox">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Alumni's Job Profile</h5>
                                    <Link to="/jobprofileadd" className="btn btn-primary mb-3">Add a new Job Profile</Link> <br />
                                    <Link to="/jobprofileeditdelete" className="btn btn-primary">Edit/Delete Job Profiles</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Teacher's Details</h5>
                                    <Link to="/teacherprofileadd" className="btn btn-primary mb-3">Add a new Teacher Profile</Link> <br />
                                    <Link to="/teacherprofileeditdelete" className="btn btn-primary">Edit/Delete Teacher's Profiles</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Announcement</h5>
                                    <Link to="/announcementedit" className="btn btn-primary">Edit Announcements</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Events</h5>
                                    <Link to="/eventsadd" className="btn btn-primary mb-3   ">Add a new Event</Link> <br />
                                    <Link to="/eventeditdelete" className="btn btn-primary">Edit/Delete Events</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage