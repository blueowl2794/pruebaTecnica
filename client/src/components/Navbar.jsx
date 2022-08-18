import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const onClick = ()=>{
        navigate("/login")
    }


  return (
    <div>
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
               { localStorage.name?<a href="/profile/home" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    HOME
                </a>
                :<a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    HOME
                </a>}
                <a href="/profile" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    PROFILE
                </a>

                {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/> */}
                {/* </form> */}

                <div class="text-end">
                {localStorage.name? null: <button onClick={onClick} type="button" className="btn btn-outline-light me-2">Login</button>}
                {/* <button type="button" className="btn btn-warning">Sign-up</button> */}
                </div>
            </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar
