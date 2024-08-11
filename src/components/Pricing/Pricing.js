import React, { useState } from 'react'
import "./Pricing.css"

export default function Pricing() {
    const [monthlySetup, setMonthlySetup] = useState(true);
    return (
        <>
            <div className="top-part text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h1>Go Premium</h1>
                            <h5>Our Premium plan is the best option for most teams — it combines all of TeamSnap's most useful features in one package for a great price.</h5>
                        </div>
                        <div className="col-4">
                            <img src="https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/new/roster-39237d0433df600285115fb1788a64be.png" className='d-none d-md-flex img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-items1" role="presentation">
                                    <button class="tab-btn active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" onClick={() => { setMonthlySetup(true) }}>Monthly</button>
                                </li>
                                <li class="nav-items2" role="presentation">
                                    <button onClick={() => { setMonthlySetup(false) }} class="tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Annual</button>
                                </li>
                            </ul>
                        </div>
                        <p className="text-center fs-5 mt-2">Hasnat Team is on the <b>Free 21 Day Trial, Monthly Billing.</b></p>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mt-4">
                                <p className="text-center">Best Value</p>
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h3 className='text-center'>Ultra</h3>
                                        <hr />
                                        <h3>{!monthlySetup ? "$10.84/month (USD)" : "$17.99/month (USD)"}</h3>
                                        <p>{!monthlySetup ? "$129.99 per team, billed annually" : "per team, billed monthly"}</p>
                                        <a className='nav-link text-primary' href="javascript:void(0)">{!monthlySetup ? "Switch to annual, save 40%" : "Switch to monthly"}</a>
                                        <button className="btn-cutsom mt-2">Chose Plan</button>
                                        <hr />
                                        <div className="text-start">

                                            {/* First */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>Unlimited Roster Members <i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="collapseExample">
                                                Roster members include players, non-players, team owner and managers. Additional contacts of a roster member (such as parents) do not count towards the roster limit.
                                            </div>


                                            {/* Second */}
                                            <span class="nav-link fw-bold mt-3">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Photos and Files — Unlimited Storage</span>


                                            {/*Third */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#SECOND" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Health Check<i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="SECOND">
                                                Administer self-assessed health screenings prior to each event.

                                            </div>

                                            {/*Fourth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Third" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>Ad-free for Owner/Managers<i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Third">
                                                Team owners and managers get an ad-free experience with all paid plans. Parents and players can purchase a monthly subscription of TeamSnap Plus in the mobile app to remove ads in the mobile experience.
                                            </div>


                                            {/*Fifth */}


                                            {/*Sixth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth34tgh" aria-expanded="false" aria-controls="Fourth34tgh">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>TeamSnap Live!
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth34tgh">
                                                Share scores, video, photos and chat during the game with TeamSnap Live!
                                            </div>

                                            {/*Seventh */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#FIFTH" aria-expanded="false" aria-controls="FIFTH">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Alerts and Reminders
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="FIFTH">
                                                Get notified of last minute changes right on your device and send automatic reminders for games, events and practices.
                                            </div>

                                            {/* Eight */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#SIXTH" aria-expanded="false" aria-controls="SIXTH">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Assignments
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="SIXTH">
                                                Allow team members to easily sign up for tasks and refreshments.
                                                <i>Also great for carpools!</i>
                                            </div>

                                            {/* Ninth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#seventh" aria-expanded="false" aria-controls="seventh">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Lineups
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="seventh">
                                                Assign who’s playing, set positions and create orders for nearly every sport.
                                            </div>

                                            {/* Tenth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#EIGHTH" aria-expanded="false" aria-controls="EIGHTH">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Statistics
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="EIGHTH">
                                                Easily track points, penalties, or anything else. Customize virtually every aspect of your statistics.
                                            </div>

                                            {/* Eleventh */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#NIONTH" aria-expanded="false" aria-controls="NIONTH">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Customization
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="NIONTH">
                                                Customize your experience by adding your team logo and colors, as well as custom fields for each player.
                                            </div>

                                            {/* 12 */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#TENTH" aria-expanded="false" aria-controls="TENTH">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>   Premium Support
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="TENTH">
                                                Gain access to the best customer support team you'll ever meet!
                                            </div>

                                            {/* 13 */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#ELEVENTH" aria-expanded="false" aria-controls="ELEVENTH">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>    Multiple Sponsorships
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="ELEVENTH">
                                                Add multiple sponsor logos and links.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="text-center most-popular">Most Popular</p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className='text-center'>Ultra</h3>
                                        <hr />
                                        <h3>{!monthlySetup ? "$8.34/month (USD)" : "$13.99/month (USD)"}</h3>
                                        <p>{!monthlySetup ? "$99.99 per team, billed annually" : "per team, billed monthly"}</p>
                                        <a className='nav-link text-primary' href="javascript:void(0)">{monthlySetup ? "Switch to annual, save 40%" : "Switch to monthly"}</a>
                                        <div className="button-div">
                                            <button className="btn-cutsom-blue mt-2">Chose Plan</button>
                                        </div>


                                        <div className="text-start">

                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#First" aria-expanded="false" aria-controls="First">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> 40 Roster Members <i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="First">
                                                Roster members include players, non-players, team owner and managers. Additional contacts of a roster member (such as parents) do not count towards the roster limit.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Second" aria-expanded="false" aria-controls="Second">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>Photos and Files — 2GB Storage
                                            </span>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#
                                            " aria-expanded="false" aria-controls="Third">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Schedule, Messages and Payments
                                            </span>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="Fourth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Health Check <i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Fourth">
                                                Administer self-assessed health screenings prior to each event.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fifth" aria-expanded="false" aria-controls="Fifth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Ad-free for Owner/Managers <i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Fifth">
                                                Team owners and managers get an ad-free experience with all paid plans. Parents and players can purchase a monthly subscription of TeamSnap Plus in the mobile app to remove ads in the mobile experience.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Sixth" aria-expanded="false" aria-controls="Sixth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Availability <i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Sixth">
                                                See who can attend which games and events and who can't.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Sevewnth" aria-expanded="false" aria-controls="Sevewnth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> TeamSnap Live!<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Sevewnth">
                                                Share scores, video, photos and chat during the game with TeamSnap Live!
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Eight" aria-expanded="false" aria-controls="Eight">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Alerts and Reminders<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Eight">
                                                Get notified of last minute changes right on your device and send automatic reminders for games, events and practices.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Ninth" aria-expanded="false" aria-controls="Ninth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Assignments<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Ninth">
                                                Allow team members to easily sign up for tasks and refreshments.
                                                <i>Also great for carpools!</i>
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Tenth" aria-expanded="false" aria-controls="Tenth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Lineups<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Tenth">
                                                Assign who’s playing, set positions and create orders for nearly every sport.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Eleventh" aria-expanded="false" aria-controls="Eleventh">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Statistics<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Eleventh">
                                                Easily track points, penalties, or anything else. Customize virtually every aspect of your statistics.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Twelveth" aria-expanded="false" aria-controls="Twelveth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Customization<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Twelveth">
                                                Customize your experience by adding your team logo and colors, as well as custom fields for each player.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Thirteenth" aria-expanded="false" aria-controls="Thirteenth">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Premium Support<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="Thirteenth">
                                                Gain access to the best customer support team you'll ever meet!
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mt-4">
                                <p className="text-center">Limited</p>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="text-center">Basic</h3>
                                        <hr />
                                        <h3>{!monthlySetup ? "$5.84/month (USD)" : "$9.99/month (USD)"}</h3>
                                        <p>{!monthlySetup ? "$69.99 per team, billed annually" : "per team, billed monthly"}</p>
                                        <a href="javascript:void(0)" className='nav-link text-primary mt-2'>{!monthlySetup ? "Switch to monthly" : "Switch to annual, save 40%"}</a>
                                        <button className="btn-cutsom">Chose Plan</button>
                                        <hr />


                                        <div className="text-start">
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#fcxvg" aria-expanded="false" aria-controls="fcxvg">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> 30 Roster Members <i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="fcxvg">
                                                Roster members include players, non-players, team owner and managers. Additional contacts of a roster member (such as parents) do not count towards the roster limit.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#fgfdxg" aria-expanded="false" aria-controls="fgfdxg">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Photos and Files — 500MB Storage
                                            </span>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#3rd" aria-expanded="false" aria-controls="3rd">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Schedule, Messages and Payments
                                            </span>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#fgfsd" aria-expanded="false" aria-controls="fgfsd">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Health Check<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="fgfsd">
                                                Administer self-assessed health screenings prior to each event.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#gbfh" aria-expanded="false" aria-controls="gbfh">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Ad-free for Owner/Managers<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="gbfh">
                                                Team owners and managers get an ad-free experience with all paid plans. Parents and players can purchase a monthly subscription of TeamSnap Plus in the mobile app to remove ads in the mobile experience.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#hnfgjn" aria-expanded="false" aria-controls="hnfgjn">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Availability<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="hnfgjn">
                                                See who can attend which games and events and who can't.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#gfbdfg" aria-expanded="false" aria-controls="gfbdfg">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  TeamSnap Live!<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="gfbdfg">
                                                Share scores, video, photos and chat during the game with TeamSnap Live!
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#fdghgedf" aria-expanded="false" aria-controls="fdghgedf">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Alerts and Reminders<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="fdghgedf">
                                                Get notified of last minute changes right on your device and send automatic reminders for games, events and practices.
                                            </div>
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#fgbxg" aria-expanded="false" aria-controls="fgbxg">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Assignments<i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="fgbxg">
                                                Allow team members to easily sign up for tasks and refreshments.
                                                <i>Also great for carpools!</i>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
