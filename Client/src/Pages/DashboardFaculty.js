import './Dashboard.css';
import {Link, useLocation} from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import {ReactComponent as LiveExamIcon} from "../Icons/live-exam-icon.svg";
import {ReactComponent as UpcomingExamsIcon} from "../Icons/upcoming-exam-icon.svg";
import {ReactComponent as CalendarIcon} from "../Icons/calendar-icon.svg";
import {ReactComponent as ListIcon} from "../Icons/list-icon.svg";
function DashboardFaculty(){
    
    return(
    <>
    <div className='page'>
    <Navbar2 role="Faculty"/>
    <div className='outer-box'>
    <div className='dashboard-title'><p className='dashboard-name'>Dashboard</p></div>
        <h2>Menu Fields : </h2>
        <h3 className='headd'>Profile:-</h3>
        <div className='text-field'>
        <p className='paragraph'>Profile field can be used to view youe own details like name, e-mail, date of birth, department, courses, etc. 
        Edit profile option can be used to update the details in your profile. 
        You can add the courses taught by you in this update feild.</p>
        </div>
        <h4 className='headd'>Enroll Students:-</h4>
        <div className='text-field'>
        <p className='paragraph'>Students can be enrolled to the particular courses taught by you in the enroll students field with the students PRN numbers.</p>
        </div>
        <h4 className='headd'>Upload Notes:-</h4>
        <div className='text-field'>
        <p className='paragraph'>You can upload the notes related to the course in the upload notes section which are accessible for students for reference.</p>
        </div>
        <h4 className='headd'>Set Exam:-</h4>
        <div className='text-field'>
        <p className='paragraph'>You can set the exam paper of courses taught by you an dcan upload it. 
        Paper can be set easily by selecting the options like question type, marks of question, etc.
        Available papers section can also be used to use previoussly saved papers.</p>
        </div>
        <h4 className='headd'>Check Paper:-</h4>
        <div className='text-field'>
        <p className='paragraph'>The aswersheets uploaded by the students can be evaluated by cheking each individual 
        question in the check paper field. Marks can be uploaded for each question and for each student. Absent students' list can be accessible.</p>
        </div>
    </div>
    </div>
    </>
    )
}
export default DashboardFaculty;