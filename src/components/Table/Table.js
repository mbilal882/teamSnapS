import React from 'react'

export default function Table() {
    return (
        <div className='d-flex  flex-column align-items-center account'>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <div role="presentation">
                    <li className="tab active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" role="tab" aria-controls="home-tab-pane" aria-selected="true">Manage My Teams</li>
                </div>
                <div role="presentation">
                    <li className="tab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Team Billing & Plans</li>
                </div>
                <div role="presentation">
                    <li className="tab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Club & League Plans</li>
                </div>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-8 offset-lg-2 mt-2 offset-md-2">
                                <div className="card p-3 w-100">
                                    <h6 className='border-0'>Manage My Teams</h6>
                                    <div className="row">
                                        <div className="col">
                                            <div className="card p-3">
                                                <h6>Hasnat Team – Cricket</h6>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">My Role:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">Team Owner / Manager</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Name on Roster:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1"><button className='custom-btn'>Drake Hardy</button></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">TeamSnap Plan:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">
                                                        <h6>Free 21 Day Trial, Monthly Billing  </h6>
                                                        <button className="custom-btn mb-3">Change Plan</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Start New Season:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">
                                                        <p>Using this feature will archive your current season and get you started for your next season. Click the button below to get started.</p>
                                                        <button className="custom-btn mb-3">Start a New Season</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Team Ownership:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">
                                                        <p>As the Team Owner you are the only person who can change billing information, change plans, and delete the team.</p>
                                                        <button className="custom-btn mb-3">Transfer Team Ownership</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Retire Team:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">
                                                        <p>Retiring a team is a permanent action and cannot be undone.</p>
                                                        <p>A retired team no longer has access to chat, photos, files or team communication and is only viewable from the Archived/Retired Teams list on the web dashboard.</p>
                                                        <p>If a retired team was formerly on a paid plan, all paid features will be permanently disabled and the team will no longer be billed.</p>
                                                        <p>(Note: Only team owners have the ability to retire a team.)</p>
                                                        <button className="custom-btn-danger mb-3">Retire this Team</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="custom-btn mt-4">Back to Hasnat Team</button>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpane1" aria-labelledby="profile-tab" tabindex="0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-8 offset-lg-2 mt-2 offset-md-2">
                                <div className="p-3 w-100">
                                    <h6 className='border-0'>Billing Summary</h6>
                                    <div className="row">
                                        <div className="col">
                                            <div className="card p-3">
                                                <h6>Team</h6>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Member since:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">Mon, Sep 12, 2022</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Credit card:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1"><button className='custom-btn'>Change or Update this Card</button></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Billing details:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">
                                                        <h6>Hasnat Team:</h6>
                                                        <div>- Free 21 Day Trial, Monthly Billing (Free!)</div>
                                                        <button className="custom-btn mb-3">Change Plan</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Refund Policy:</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">
                                                        <p>
                                                            TeamSnap is a pay-as-you-go service so we don't provide refunds. You can cancel the service at any time and you won't be charged again, but you are responsible for any charges already incurred.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="custom-btn mt-4">Back to Hasnat Team</button>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-8 offset-lg-2 mt-2 offset-md-2">
                                <div className="p-3 w-100">
                                    <h6 className='border-0'>Billing Summary</h6>
                                    <div className="row">
                                        <div className="col">
                                            <div className="card p-3">
                                                <h6>Club & League Billing</h6>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 p-2 bg-whitesmoke border border-1">Clubs & Leagues</div>
                                                    <div className="col-12 col-md-8 col-lg-8 p-2 border border-1">You do not own any TeamSnap clubs. Therefore, you do not have any billing. Yippee!</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="custom-btn mt-4">Back to Hasnat Team</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
