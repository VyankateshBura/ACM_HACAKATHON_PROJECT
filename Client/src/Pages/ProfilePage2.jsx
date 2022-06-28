import React from "react";
import "./ProfilePage2.css";
import axios from 'axios';
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import Navbar2 from "../Components/Navbar2";
import "../Components/BlueButton.css";
import {Link} from "react-router-dom";
function ProfilePage2() {
  const [profileData,setProfileData]=React.useState({"name":" ","email":"","prn":"","branch":"","year":0,"dob":""})
  // const [DataFiles,setDataFiles] = React.useState([]);
  const [profile,setProfile] = React.useState(null);
  const [sign,setSign]=React.useState(null)
  // const[imgCollection,setimgCollection] = React.useState([]);
  
  const handleChange = e => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
        ...prevState,
        [name]: value
    }));
    // console.log(profileData);
};

  function submitProfile(e){
    e.preventDefault();
    const formData = new FormData();
      // for (const key of Object.keys(DataFiles)) {
      //     formData.append('files', DataFiles[key])
      // }
      formData.append("profiles",profile);
      formData.append('profiles',sign);
      // console.log(profileData);
      formData.append("name",profileData.name);
      formData.append("email",profileData.email);
      formData.append("prn",profileData.prn);
      formData.append("branch",profileData.branch);
      formData.append("year",profileData.year);
      formData.append("dob",profileData.dob);
      formData.append("token",localStorage.getItem('token'));
      const data = formData.getAll('profiles');
      
      console.log(data);
      // console.log(profile);

    axios.post("http://localhost:5000/api/v1/upload/profile", formData).then((res)=>{
      console.log(res)
      // localStorage.setItem(User_id,res.fileInfo.User_id);
    }).catch((err)=>console.log(err));

    
    // .then(function (res) {
    //   if (res.ok) {
    //     alert("Profile Updated Successfully");
    //   } else if (res.status == 401) {
    //     alert("Sorry we can't update profile now ");
    //   }
    // }, function (e) {
    //   alert("Error submitting form!");
    // });
    // console.log(profileData);
    // console.log(DataFiles);
    // const data = {
    //   files:DataFiles,
    //   profiledata:profileData
    // }
    // console.log(data);
    // const res = await axios.post("http://localhost:5000/api/v1/upload", {
    //   contentType:"multi"
    //   body:formData
    // })
    // console.log(res);
  }
  return (
    <>
      <div className="Edit-Profile-page">
        <Navbar2 />
        <div className="Edit-Profile-outer-box">
          <div className="Edit-outer">
            <div className="profile-button">
              <Link to="/profile"><span><div><OptionBoxWhite name="Profile"> </OptionBoxWhite></div></span></Link>
              <span><div><OptionBoxBlue name="Edit-Profile"></OptionBoxBlue></div></span>
            </div>
            <div className="Edit-mainPart" >
              <form  encType=" multipart/form-data" onSubmit={submitProfile}>
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Name</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleChange}  id="name" type="text" name="name" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Photo</h3>
                  </div>
                  <div className="Edit-colIn Photo">
                    <input  className="file-button" type="file" onChange = {(e)=>setProfile(e.target.files[0])}></input>
                    {profile&&<img src={URL.createObjectURL(profile)} style={{width:'80px',height:'50px'}}/>}
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Signature</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={(e)=>setSign(e.target.files[0])}className="file-button" type="file"></input>
                    {sign&&<img src={URL.createObjectURL(sign)} style={{width:'80px',height:'50px'}}/>}
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
                    <h3>PRN</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleChange} name = "prn" id="prn" type="text" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Branch</h3>
                  </div>
                  <div className="Edit-colIn">
                    <select onChange={handleChange} name = "branch" id="branch">
                      <option>Select branch</option>
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
                    <h3>Year</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleChange} name = "year" id="year" type="number" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Date Of Birth</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleChange} name = "dob" id="dob" type="Date" />
                  </div>
                </div>
                <hr />
                <div className="edit-save">
                <button className="button" type="submit">"Save Changes"</button>
              {/* <BlueButton title="Save Changes" /> */}
            </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage2;