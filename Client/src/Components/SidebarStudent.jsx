import React,{useState,useEffect} from "react";
import {Link,useLocation} from "react-router-dom";
import {Images} from "../Images/ImagesIndex"
import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../Icons/home-icon.svg";
import { ReactComponent as ProfileIcon } from "../Icons/profile-d-icon.svg";
import { ReactComponent as NotesIcon } from "../Icons/note-icon.svg";
import { ReactComponent as ExamIcon } from "../Icons/exam-icon.svg";
import { ReactComponent as ResultIcon } from "../Icons/result-icon.svg";
import { ReactComponent as LogoutWIcon } from "../Icons/logout-icon-white.svg";
import { ReactComponent as MenuIcon } from "../Icons/menu-icon-white.svg";
function SidebarStudent({role,name}) {
  let loc = useLocation();
  // let curr_page = loc.pathname.split('/').pop();
  // console.log(curr_page)
  const [activepage,setActivepage] = useState({Student:'nav-link text-white',studentprofile:'nav-link text-white',notes:'nav-link text-white',examlogin:'nav-link text-white',results:'nav-link text-white',checkpaper:'nav-link text-white'});
  useEffect(()=>{
    setActivepage(prevState => ({
      ...prevState,
      [loc.pathname.split('/').pop()]: 'nav-link active'
  }));
},[])

  const [sidebar,setSidebar]=React.useState(true)
  function showSidebar(){
    setSidebar((prevState)=>!prevState)
  }
  if(sidebar)
  return (
    <div>
      <ul className="list-item">
        <div className="menu-option">
          <MenuIcon onClick={showSidebar}/>
        </div>
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ width: " 230px", height: "90vh" ,borderRadius:'10px'}}
          >
            <div
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <img src={Images.WCE} style={{margin:'1vh 1vw',width:'4vw',height:'8vh',backgroundColor:'white',borderRadius:'10px'}}/>
              <span className="fs-4">W C E</span>
            </div>

            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
              <Link to={`/studentdashboard/${role}`} className="link">
              <li className="nav-item">
                  <div href="#" className={activepage.Student} aria-current="page">
                   <HomeIcon/>&nbsp;&nbsp;&nbsp;
                    Home
                  </div>
                </li>
              </Link>
              <Link to="/studentprofile" state={role} className="link">
              <li>
                <div href="#" className={activepage.studentprofile}>
                 <ProfileIcon/>&nbsp;&nbsp;&nbsp;
                  Profile
                </div>
              </li>
              </Link>
              {/* <Link to="/enroll" state={role}>
              <li>
                <div href="#" className={activepage.enroll}>
                  <svg className="bi me-2" width="16" height="16">
                    {/*<use xlink:href="#table"></use>*/}
                  {/* </svg>
                  Enroll Students
                </div>
              </li>
              </Link>  */}

              <Link to="/notes" state={role} className="link">
              <li>
                <div href="#" className={activepage.notes}>
                  <NotesIcon/>&nbsp;&nbsp;&nbsp;
                  Notes
                </div>
              </li>
              </Link>
              <Link to="/examlogin" state={role} className="link">
              <li>
                <div href="#" className={activepage.examlogin}>
                  <ExamIcon/>&nbsp;&nbsp;&nbsp;
                  Exam
                </div>
              </li>
              </Link>
              <Link to="/results" state={role} className="link">
              <li>
                <div href="#" className={activepage.results}>
                <ResultIcon/>&nbsp;&nbsp;&nbsp;
                  Result
                </div>
              </li>
              </Link>
              <Link to="/" state={role} className="link">
              <li>
                <div href="#" className="nav-link text-white">
                  <LogoutWIcon/>&nbsp;&nbsp;&nbsp;
                  Log Out
                </div>
              </li>
              </Link>
             </ul>

        </div>
      </ul>
    </div>
  );
}
export default SidebarStudent;
