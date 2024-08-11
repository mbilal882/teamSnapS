import React from 'react'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-bg navbar-dark sticky-top top-0">
                <div className="container text-center">
                    <a className="navbar-brand" href="#">Team Snap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link active" >
                                    Products
                                    <i className="fa-solid fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu display">
                                    <div className="dropdown-items text-start" style={{ minWidth: "250px" }}>
                                        <a className='nav-link ms-3' href="#">Clubs & Leagues</a>
                                        <li><a href="#" className='nav-links'>For clubs & associations with multiple teams</a></li>
                                        <li><a href="#" className='nav-links'>Sports</a></li>
                                        <li><a href="#" className='nav-links'>Features</a></li>
                                        <li><a href="#" className='nav-links'>Get a demo</a></li>
                                    </div>
                                    <div className="dropdown-items text-start" style={{ minWidth: "250px" }}>
                                        <a className='nav-link ms-3' href="#">Teams</a>
                                        <li><a href="#" className='nav-links'>The easiest way to manage a team</a></li>
                                        <li><a href="#" className='nav-links'>Sports</a></li>
                                    </div>
                                    <div className="dropdown-items text-start" style={{ minWidth: "250px" }}>
                                        <a className='nav-link ms-3' href="#">Tournaments</a>
                                        <li><a href="#" className='nav-links'>Build and manage your events in a snap</a></li>
                                        <li><a href="#" className='nav-links'>Scheduling</a></li>
                                        <li><a href="#" className='nav-links'>Registration</a></li>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active" >
                                    Company
                                    <i className="fa-solid fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <div className="dropdown-items w-100 text-start" style={{ minWidth: "250px" }}>
                                        <a className='nav-links' href="#">About</a>
                                        <a className='nav-links' href="#">For Brands</a>
                                        <a className='nav-links' href="#">Career</a>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active">
                                    Resourses
                                    <i className="fa-solid fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <div className="dropdown-items w-100 text-start" style={{ minWidth: "250px" }}>
                                        <a className='nav-links' href="#">Blog</a>
                                        <a className='nav-links' href="#">Community Impact</a>
                                        <a className='nav-links' href="#">Off-Season</a>
                                        <a className='nav-links' href="#">Tips for Student Athletes</a>
                                        <a className='nav-links' href="#">Coaches Corner</a>
                                        <a className='nav-links' href="#">Return to play</a>
                                        <a className='nav-links' href="#">Clubs & leagues Resources</a>
                                        <a className='nav-links' href="#">Help center</a>
                                        <a className='nav-links' href="#">Api Docs</a>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
