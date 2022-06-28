import React from 'react';

export default function Logout(){
    function logout(){
        console.log("User logged out!");
    }
    return(
        <select>
            <option onClick={logout}value="Logout">Log out</option>
        </select>
    )
}