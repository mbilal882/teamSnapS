import React from 'react'
import "./FindTeam.css"


export default function FindTeam() {
  return (
    <div className='findTeam'>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-lg-8">
            <div className="card p-4 text-center">
              <h1>Looking for Your Team?</h1>
              <p>Your coach (or a family member already on the team) must send you an email invitation.</p>
              <b>Enter your email address below to check if an invite has been sent.</b>
              <div className="col-8 offset-sm-2 d-flex">
                <input type="email" placeholder='Email Address' className="form-control w-75 rounded-0 rounded-start" />
                <button className="btn-custom-success p-2 rounded-0 rounded-end">Search</button>
              </div>
            </div>
            <div className="card p-2 my-3">
              <div className="card-body text-center">
                <h2>How Do Team Invitations Work?</h2>
                <img src="https://res.cloudinary.com/seeraht/image/upload/v1663578233/Screenshot_2_am3kab.png" alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card p-2">
              <div className="card-body">
                <p className="fs-4">Related Help Topics</p>
                <hr />
                <div className='mt-3'><a href="#" className="link fs-6">How do I find my team?</a></div>
                <div className='mt-3'><a href="#" className="link fs-6">I want to join a team but I don’t know how</a></div>
                <div className='mt-3'><a href="#" className="link fs-6">I’m trying to accept an invitation, but it says “This invitation has already been accepted”</a></div>
                <div className='mt-3'><a href="#" className="link fs-6">The invitations to my teammates are getting caught in their spam filters.</a></div>
                <div className='mt-3'><a href="#" className="link fs-6">How do player invitations work?</a></div>
                <div className='mt-3'><a href="#" className="link fs-6">Can I have multiple usernames for my player account?</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
