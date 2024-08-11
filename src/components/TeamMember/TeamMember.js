import React from 'react'
import { Link } from 'react-router-dom'
import "./TeamMamber.css"


export default function TeamMember() {
    return (
        <div className='role'>
            <div className="container">
                <div className="row text-center">
                    <h3 className='text-center my-4'>Team Member</h3>
                    <div className="col-12 col-lg-6 offset-lg-3">
                        <p>Coaches invite players to join TeamSnap, and we can’t find any invitations that match your email address. Check another email, or send your coach a quick note asking him/her to invite you to TeamSnap!</p>
                        <div className="card m-0">
                            <div className="card-body">
                                <img src="https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/role_player-b57a63fecdc1224c8a1568ac43067a79.png" className='img-fluid' alt="" />
                                <hr />
                                <div className="d-flex w-100">
                                    <div className="w-50">
                                        <Link to="/findTeam" className="custom-btn-outline float-start"><i class="fa-solid fa-magnifying-glass me-2"></i>Find Your Team</Link>
                                    </div>
                                    <div className="w-50">
                                        <Link to="/inviteCoach" className="custom-btn-outline float-end"><i class="fa-solid fa-envelope me-2"></i>Invite Your Coach</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 offset-lg-3">
                        <div className="card p-2 mt-4">
                            <a className='link fs-4 fw-bold' href="#">Family member already on the team?</a>
                            <p>Learn how to set up multiple accounts within a family.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
