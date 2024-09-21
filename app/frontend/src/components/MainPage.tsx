import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    const onLogout = async (e: any) => {
        e.preventDefault();
        navigate("/login");
    }    

    return(
        <>
            <div>
                <h1>Main Page</h1>
                <button type="button" id="logoutButton" onClick={onLogout}>Logout</button>
            </div>
        </>)
}

export default MainPage;