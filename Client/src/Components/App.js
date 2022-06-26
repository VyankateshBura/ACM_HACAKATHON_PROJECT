import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import SetExamPaper from '../Pages/SetExamPaper';
import SetQuestions from '../Pages/SetQuestions';
import AvailablePaper from '../Pages/AvailablePaper';
import Settings from '../Pages/Settings';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';
import CheckPaper from '../Pages/CheckPaper';
import AnswersheetsList from '../Pages/AnswersheetsList';
import AbsentStudents from '../Pages/AbsentStudents';
import DashboardFaculty from '../Pages/DashboardFaculty';
import DashboardStudent from '../Pages/DashboardStudent';
import Results from '../Pages/Results';
import SavedPaper from "../Pages/SavedPaper";
import SetEachQuestion from "../Pages/SetEachQuestion";
import EnrolledList from "../Pages/EnrolledList";
import EnrollStudent from "../Pages/EnrollStudent";
import ViewPdf from "../Pages/ViewPdf";
import NotesPageFaculty from "../Pages/NotesPageFaculty";
import NotesPageStudent from "../Pages/NotesPageStudent";
import ViewFile from "../Pages/ViewFile";
import ProfilePage2 from "../Pages/ProfilePage2";
import ProfilePage1 from "../Pages/ProfilePage1";
import ProfilePage2Fac from "../Pages/ProfilePage2Fac";
import CheckQue from "../Pages/CheckQue";
import ExamLogin from "../Pages/ExamLogin";
import LiveExam from "../Pages/LiveExam";
function App() {
  return (
    <div className="App"> 
      <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path="/facultydashboard/:id" element={<DashboardFaculty/>}/>
      <Route exact path="/studentdashboard/:id" element={<DashboardStudent/>}/>
      <Route exact path='/settings' element={<Settings/>}/>
      <Route exact path='/checkpaper' element={<CheckPaper/>}/>
      <Route exact path='/setexampaper' element={<SetExamPaper/>}/>
      <Route exact path='/results' element={<Results/>}/>
      <Route exact path='/answersheetslist' element={<AnswersheetsList/>}/>
      <Route exact path='/absentstudents' element={<AbsentStudents/>}/>
      <Route exact path='/availablepapers' element={<AvailablePaper/>}/>
      <Route exact path='/setnewpaper/:id' element={<SetQuestions/>}/>
      <Route exact path='/savedpaper/:id' element={<SavedPaper/>}/>
      <Route exact path='/setquestions/:id/:id' element={<SetEachQuestion/>}/>
      <Route exact path='/addedlist/:id/:id' element={<EnrolledList/>}/>
      <Route exact path='/enroll' element={<EnrollStudent/>}/>
      <Route exact path='/viewpdf' element={<ViewPdf/>}/>
      <Route exact path="/uploadnotes" element={<NotesPageFaculty/>}/>
      <Route exact path="/notes" element={<NotesPageStudent/>}/>
      <Route exact path="/viewfile" element={<ViewFile/>}/>
      <Route exact path="/studentprofileedit" element={<ProfilePage2/>}/>
      <Route exact path="/studentprofile" element={<ProfilePage1/>}/>
      <Route exact path="/facultyprofileedit" element={<ProfilePage2Fac/>}/>
      <Route exact path="/checkque" element={<CheckQue/>}/>
      <Route exact path="/examlogin" element={<ExamLogin/>}/>
      <Route exact path="/liveexam" element={<LiveExam/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
