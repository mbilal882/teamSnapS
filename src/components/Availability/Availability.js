import React, { useState } from 'react';
import "./Availability.css";

export default function Availability() {
    const initialState = { DontPlay: false, DontPlayEvent: false }
    const [state, setState] = useState(initialState)
    const [isShow, setIsShow] = useState(false)
    const [icon, setIcon] = useState("")
    return (
        <div className='availability'>
            <div className="container">
                <div className="row">
                    <div className="mt-5"></div>
                    <div className="col-6 color-of-teamsnap">
                        <h2>Availability</h2>
                    </div>
                    <div className="col-6 d-flex justify-content-start align-items-center">
                        <select class="custom-btn w-25 me-3" aria-label="Default select example">
                            <option selected>Show All</option>
                            <option value="1">Games Only</option>
                            <option value="2">Events Only</option>
                        </select>
                        <button className="custom-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-gear me-2"></i>Availability Preferences</button>
                        <button className="custom-btn ms-2" data-bs-toggle="modal" data-bs-target="#Static"><i class="fa-solid fa-download me-2"></i>Export</button>
                    </div>
                    <div className="col">
                        <div className="card m-0 p-0 mt-2">
                            <table class="table m-0 p-0">
                                <thead>
                                    <tr>
                                        <th className='w-50'></th>
                                        <th className='w-50'><i class="fa-solid fa-flag me-1 pink-color"></i><a href="javascript:void(0)" className='nav-link text-primary d-inline'>vs. sdfiojfisd</a>
                                            <p className='mb-0 fw-normal'>Thu, Sep 15, 2022 6:00 AM</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Players</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Players</th>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card mt-5">
                            <table class="table m-0 p-0">
                                <thead>
                                    <tr>
                                        <th className='w-50'>Non-Players</th>
                                        <th className='w-50'><i class="fa-solid fa-flag me-1 pink-color"></i><a href="javascript:void(0)" className='nav-link text-primary d-inline'>vs. sdfiojfisd</a>
                                            <p className='mb-0 fw-normal'>Thu, Sep 15, 2022 6:00 AM</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex">
                                                <i class="fa-solid fa-user fs-3 my-2 me-3"></i>
                                                <div className="div">

                                                    <a href="javascript:void(0)" className='nav-link text-primary fw-normal'>Drake Hardy</a>
                                                    <p className="mb-0">Set Multiple:</p>
                                                    <button className="custom-btn-success rounded-0 rounded-start"><i class="fa-solid fa-check"></i></button>
                                                    <button className="custom-btn-primary rounded-0"><i class="fa-solid fa-question"></i></button>
                                                    <button className="custom-btn-danger rounded-0 rounded-end"><i class="fa-solid fa-xmark"></i></button>
                                                </div>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="tooltips-btn">
                                                <button className="custom-btn-success mt-3" onClick={() => { setIsShow(!isShow) }}>{!icon ? "None" : icon}
                                                </button>
                                                <div className={!isShow ? "tooltips hide" : "tooltips show"} style={{ top: "-30px" }}>
                                                    <button className="custom-btn-success bg-green rounded-0 rounded-start" onClick={() => { setIcon(<i class="fa-solid fa-check"></i>); setIsShow(false) }}>Going</button>
                                                    <button className="custom-btn-success bg-primary rounded-0" onClick={() => { setIcon(<i class="fa-solid fa-question"></i>); setIsShow(false) }}>Maybe</button>
                                                    <button className="custom-btn-danger rounded-0" onClick={() => { setIcon(<i class="fa-solid fa-xmark"></i>); setIsShow(false) }}>No</button>
                                                    <button className="custom-btn rounded-0 rounded-end" onClick={() => { setIcon(""); setIsShow(false) }}>Clear</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal of Setting */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h6 className='text-center color-of-teamsnap fw-bold'>My Availability Preferences</h6>
                            <div class="form-check w-100">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Show past availability
                                </label>
                            </div>
                            <span className='me-2'>Show</span>
                            <select class="custom-btn w-25 me-3" aria-label="Show">
                                <option value="5" selected>5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                            <span>games/events per page</span>
                            <h6 className='text-center color-of-teamsnap fw-bold my-4'>Team Availability Preferences</h6>
                            <div class="form-check w-100">
                                <input class="form-check-input" onChange={() => { setState(s => ({ ...s, DontPlay: !state.DontPlay })) }} name="DontPlay" checked={state.DontPlay ? true : false} type="checkbox" id="DontPlay" />
                                <label class="form-check-label" for="DontPlay">
                                    Don't let players change availability within
                                </label>
                                <input type="text" disabled={!state.DontPlay ? true : false} size="2" /> Hours
                            </div>
                            <div class="form-check w-100 mt-2">
                                <input class="form-check-input" onChange={() => { setState(s => ({ ...s, DontPlayEvent: !state.DontPlayEvent })) }} name="DontPlayEvent" checked={state.DontPlayEvent ? true : false} type="checkbox" id="DontPlayEvent" />
                                <label class="form-check-label" for="DontPlayEvent">
                                    Don't let players change availability within
                                </label>
                                <input type="text" disabled={!state.DontPlayEvent ? true : false} size="2" /> Hours
                            </div>
                            <div class="form-check mt-3">
                                <label class="form-check-label" for="gameOrEvent">
                                    On game/event detail page, list players by
                                </label>
                                <br />
                                <select class="custom-btn w-25" aria-label="Show" id='gameOrEvent'>
                                    <option value="Jersey Number" selected>Jersey Number</option>
                                    <option value="Name">Name</option>
                                    <option value="Date Signed Up As Available">Date Signed Up As Available</option>
                                </select>
                            </div>
                            <div class="form-check w-100 mt-3">
                                <input class="form-check-input" name="DontPlayEvent" type="checkbox" id="notes" />
                                <label class="form-check-label" for="notes">
                                    Availability notes are viewable by everyone on the team
                                </label>
                            </div>
                            <div className="d-flex justify-content-center my-3">
                                <button data-bs-dismiss="modal" className="btn text-white px-4 text-center bg-danger"><i class="fa-solid fa-xmark me-2"></i>Cancel</button>
                                <div className="mx-2"></div>
                                <button data-bs-dismiss="modal" className="btn text-white px-4 text-center bg-custom-success"><i class="fa-solid fa-check me-2"></i>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal of Export */}
            <div class="modal fade w-100" id="Static" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="StaticLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h2 className="text-center color-of-teamsnap">
                                Availability Export
                            </h2>
                            <p className='text-center'>Download your team’s availability data as a comma-separated (CSV) text file for nerdy analysis in a spreadsheet or database.</p>
                            <div className="d-flex justify-content-center my-3">
                                <button data-bs-dismiss="modal" className="btn text-white px-4 text-center bg-danger"><i class="fa-solid fa-xmark me-2"></i>Cancel</button>
                                <div className="mx-2"></div>
                                <button data-bs-dismiss="modal" className="btn text-white px-4 text-center bg-custom-success"><i class="fa-solid fa-download me-2"></i>Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
