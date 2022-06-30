import React,{useState} from "react";
import axios from "axios";
import "./ProfilePage2.css";
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import Navbar2 from "../Components/Navbar2";
import BlueButton from "../Components/BlueButton";
import {Link,useNavigate,useLocation} from "react-router-dom";
function ProfilePage2Fac() {
  const role = useLocation();
  let navigate = useNavigate();
  const [courses,setCourses]=React.useState(["Subject"])
  const [course,setCourse]=React.useState(null);
  const [profile,setProfile] = React.useState(null);
  const [sign,setSign] = React.useState(null);
  const [profileData,setProfileData]=React.useState({"name":"","email":"","prn":"","department":"","dob":""})

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setProfileData(prevState =>({
      ...prevState,
      [name]:value
    }));
  }
 

  function addcourse(e){
      e.preventDefault();
      console.log(course);
    setCourses(courses => [...courses, course]);
}
function handlesubmit(e){
  e.preventDefault();
    let formData = new FormData();
    courses.splice(0,1);
    courses.pop();
    formData.append("profiles",profile);
    formData.append('profiles',sign);
    formData.append("name",profileData.name);
    formData.append("email",profileData.email);
    formData.append("department",profileData.department);
    formData.append("coursetaught",courses);
    formData.append("dateofbirth",profileData.dob);
    formData.append("token",localStorage.getItem('token'));
    console.log(formData.getAll('coursetaught'));
    axios.post("http://localhost:5000/api/v1/faculty/profile/update", formData,{
      headers:{
        token:localStorage.getItem("token")
      }
      
    }).then((res)=>{
      console.log(res);
      navigate(`/facultyprofile`,{state:role});
    }).catch((err)=>console.log(err));
}
const [addcss,setaddcss] = useState("8vw");
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("18vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("8vw"); 
        }
    }
  return (
    <>
      <div className="Edit-Profile-page">
        <Navbar2 shift={shift} role={role}/>
        <div className="Edit-Profile-outer-box" style={{marginLeft:`${addcss}`}}>
          <div className="Edit-outer">
            <div className="profile-button">
              <Link to="/facultyprofile"><span><div><OptionBoxWhite name="Profile"> </OptionBoxWhite></div></span></Link>
              <span><div><OptionBoxBlue name="Edit-Profile"></OptionBoxBlue></div></span>
            </div>
            <div className="Edit-mainPart">
              <form encType=" multipart/form-data" onSubmit={handlesubmit}>
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Name</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleChange} id="name" name = "name"type="text" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Photo</h3>
                  </div>
                  <div className="Edit-colIn Photo">
                    <input onChange={(e)=>setProfile(e.target.files[0])} className="file-button" type="file"></input>
                    {
                      profile&&
                    <img src = {URL.createObjectURL(profile)} style={{width:'80px',height:'50px'}}/>
                    }
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Signature</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={(e)=>{setSign(e.target.files[0])}}className="file-button" type="file"></input>
                    {
                      sign&&
                    <img src = {URL.createObjectURL(sign)} style={{width:'80px',height:'50px'}}/>
                    }
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>E-mail</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleChange} name = "email" id="email" type="email" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Department</h3>
                  </div>
                  <div className="Edit-colIn">
                    <select onChange={handleChange} name = "department" id="department">
                      <option>Select department</option>
                      <option value="Computer Science and Engineering">
                        Computer Science and Engineering
                      </option>
                      <option value="Information Technology">
                        Information Technology
                      </option>
                      <option value="Electronics">Electronics</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Civil">Civil</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Date Of Birth</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleChange} id="dob" name = "dob" type="Date" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Course</h3>
                  </div>
                  <div className="repeat-it">
                  {courses.map((item,key)=>(
                    <div key={key}>
                      <input id="course" type="text" onChange = {(e)=>{
                        setCourse(e.target.value)}} />
                    <div><button className="repeat-btn"onClick={addcourse}>Add course</button></div>
                    </div>
                 ))}
                  </div>
                  {/* <div className="Edit-colIn">
                    <input onChange={addcourse} id="course" type="text" />
                  </div> */}
                  {/* <div><button onClick={addcourse}>Add course</button></div> */}
                </div>
                <hr/>
                <div className="edit-save">
              <BlueButton title="Save Changes" />
            </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage2Fac;