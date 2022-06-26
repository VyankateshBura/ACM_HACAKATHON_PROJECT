import React from "react";
import "./ProfilePage2.css";
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import Navbar2 from "../Components/Navbar2";
import BlueButton from "../Components/BlueButton";
import {Link} from "react-router-dom";
function ProfilePage2Fac() {
    const [courses,setCources]=React.useState(["Add"])
    const [sub,setSub]=React.useState("")
    const [c,setC]=React.useState([])
  const [profileData,setProfileData]=React.useState({"name":" ","email":"","prn":"","department":"","dob":""})
  const [photo,setPhoto]=React.useState("")
  const [sign,setSign]=React.useState("")
  function handlesign(e){
    if(e.target.files && e.target.files[0]){
      let p=e.target.files[0]
      setSign({sign:URL.createObjectURL(p)})
  }
  }
  function handlephoto(e){
    if(e.target.files && e.target.files[0]){
      let pic=e.target.files[0]
      setPhoto({photo:URL.createObjectURL(pic)})
  }}
  function handleprofile(e){
    const newprofileData={...profileData}
        newprofileData[e.target.id]=e.target.value
        setProfileData(newprofileData)
  }
  function addcourse(e){
      e.preventDefault()
    setCources([...courses,"Add"])
    c.push(sub)
}
function handlesub(e){
    setSub(e.target.value)
}
// function handlecourse(e){
//     // setC([...c],e.target.value)
//     c.push(e.target.value)
// }
console.log(profileData)
console.log(c)
  return (
    <>
      <div className="Edit-Profile-page">
        <Navbar2 />
        <div className="Edit-Profile-outer-box">
          <div className="Edit-outer">
            <div className="profile-button">
              <Link to="/facultyprofile"><span><div><OptionBoxWhite name="Profile"> </OptionBoxWhite></div></span></Link>
              <span><div><OptionBoxBlue name="Edit-Profile"></OptionBoxBlue></div></span>
            </div>
            <div className="Edit-mainPart">
              <form>
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Name</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleprofile} id="name" type="text" name="name" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Photo</h3>
                  </div>
                  <div className="Edit-colIn Photo">
                    <input onChange={handlephoto}className="file-button" type="file"></input>
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Signature</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handlesign}className="file-button" type="file"></input>
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>E-mail</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleprofile} id="email" type="email" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Department</h3>
                  </div>
                  <div className="Edit-colIn">
                    <select onChange={handleprofile} id="department">
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
                    <input onChange={handleprofile} id="dob" type="Date" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Course</h3>
                  </div>
                  <div className="repeat-it">
                  {courses.map((item,key)=>(<form className="repeat-div" key={key}>
                    <input onChange={handlesub} id="course" type="text" />
                    <div><button className="repeat-btn"onClick={addcourse}>Add course</button></div>
                  </form>))}
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
