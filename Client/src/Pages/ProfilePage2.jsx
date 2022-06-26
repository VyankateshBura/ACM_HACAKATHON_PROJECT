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
  const [DataFiles,setDataFiles] = React.useState([]);
  const [profile,setProfile] = React.useState(null);
  const [sign,setSign]=React.useState(null)
  // const[imgCollection,setimgCollection] = React.useState([]);
  
  function handlesign(e){
        if(e.target.files && e.target.files[0]){
          // console.log(e.target.files[0]);
          setDataFiles(DataFiles=>[...DataFiles,e.target.files[0]]);
          // console.log(DataFiles);
        // let p=e.target.files[0]
        // setSign({sign:URL.createObjectURL(p)})
    }
  }

  function handleprofile(e){
 
    let formData = new FormData()
    let file = e.target.files[0]
    let filename = e.target.files[0].name

    formData.append('file', file)
    formData.append('filename', filename)

    axios.post('user-settings/profile-picture', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    }).then(res=>{console.log(res)})  
  }
  function submitProfile(e){
    // e.preventDefault()
    // let formData = new FormData();
      // for (const key of Object.keys(DataFiles)) {
      //     formData.append('files', DataFiles[key])
      // }
    //   formData.append('files',DataFiles[0]);
    //   console.log(formData);
    // axios.post("http://localhost:5000/api/v1/upload", {
    //   mode: 'no-cors',
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Accept": "application/json",
    //     "type": "formData"
    //   },
    //   body:formData
      
    // }).then(function (res) {
    //   if (res.ok) {
    //     alert("Perfect! ");
    //   } else if (res.status == 401) {
    //     alert("Oops! ");
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
                    <input onChange={handleprofile} id="name" type="text" name="name" />
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
                    <input onChange={handleprofile} id="email" type="email" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>PRN</h3>
                  </div>
                  <div className="Edit-colIn">
                    <input onChange={handleprofile} id="prn" type="text" />
                  </div>
                </div>
                <hr />
                <div className="Edit-col1">
                  <div className="Edit-colOut">
                    <h3>Branch</h3>
                  </div>
                  <div className="Edit-colIn">
                    <select onChange={handleprofile} id="branch">
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
                    <input onChange={handleprofile} id="year" type="number" />
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