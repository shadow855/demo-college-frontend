
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Events from './components/Events';
import Login from './components/Login';
import AdminPage from './components/AdminPage';

import './css folder/scrollbar.css';

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import JobProfile from './components/JobProfile';
import TeachersProfile from './components/TeachersProfile';
import JobProfileAdd from './components/JobProfileAdd';
import JobProfileEditDelete from './components/JobProfileEditDelete';
import AnnouncementEdit from './components/AnnouncementEdit';
import TeacherProfileAdd from './components/TeacherProfileAdd';
import TeacherProfileEditDelete from './components/TeacherProfileEditDelete';
import EventsAdd from './components/EventsAdd'
import EventEditDelete from './components/EventEditDelete'

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Intro />
        <Routes>
          {/* Set the default route to redirect to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<LandingPage />}>
          </Route>
          <Route exact path="/jobprofile" element={<JobProfile />}>
          </Route>
          <Route exact path="/teachersprofile" element={<TeachersProfile />}>
          </Route>
          <Route exact path="/events" element={<Events />}>
          </Route>
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/adminpage" element={<AdminPage />}>
          </Route>
          <Route exact path="/jobprofileadd" element={<JobProfileAdd />}>
          </Route>
          <Route exact path="/jobprofileeditdelete" element={<JobProfileEditDelete />}>
          </Route>
          <Route exact path="/announcementedit" element={<AnnouncementEdit />}>
          </Route>
          <Route exact path="/teacherprofileadd" element={<TeacherProfileAdd />}>
          </Route>
          <Route exact path="/teacherprofileeditdelete" element={<TeacherProfileEditDelete />}>
          </Route>
          <Route exact path="/eventsadd" element={<EventsAdd />}>
          </Route>
          <Route exact path="/eventeditdelete" element={<EventEditDelete />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
