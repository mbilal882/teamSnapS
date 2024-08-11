import React from 'react'
import "./Profile.css"

export default function Profile() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row">
                            <div className="col-6"><h2 className='color-of-teamsnap'>Player</h2></div>
                            <div className="col-6 text-end">
                                <button className="custom-btn me-2 mb-2 mb-md-0"><i class="fa-solid fa-pen-to-square me-2"></i>Edit</button>
                                <button className="custom-btn-success mb-2 mb-md-0"><i class="fa-solid fa-plus me-2"></i>Add Family Member</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100">
                                    <h6 className='m-3'>Quail Adams</h6>
                                    <div className="row">
                                        <div className="col-4 bg-whitesmoke border border-1 p-3 px-4">First Name</div>
                                        <div className="col-8 bg-white border border-1 p-3 px-4">Alexis</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 bg-whitesmoke border border-1 p-3 px-4">Last Name</div>
                                        <div className="col-8 bg-white border border-1 p-3 px-4">Mccray</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 bg-whitesmoke border border-1 p-3 px-4">Birthday</div>
                                        <div className="col-8 bg-white border border-1 p-3 px-4">06/22/02</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 bg-whitesmoke border border-1 p-3 px-4">Gender</div>
                                        <div className="col-8 bg-white border border-1 p-3 px-4">Female</div>
                                    </div>
                                </div>
                                <div className="card w-100 mt-3">
                                    <h6 className='m-3'>Contact Information</h6>
                                    <div className="row">
                                        <div className="col-4 bg-whitesmoke border border-1 p-3 px-4">Alexis Mccray</div>
                                        <div className="col-8 bg-white border border-1 p-3 px-4">
                                            <a href="mailto:tedaji7130@edxplus.com" className='nav-link text-primary d-inline'>tedaji7130@edxplus.com</a> - Possimus voluptatem
                                            <p className="mb-0">4567890-= - Possimus voluptatem</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100 mt-3">
                                    <h6 className='m-3'>Player Links and Files</h6>
                                    <div className="row">
                                        <div className="col-4 bg-whitesmoke border border-1 p-3 px-4">Links:</div>
                                        <div className="col-8 bg-white border border-1 p-3 px-4">
                                            <button className="custom-btn">Add Link</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 bg-whitesmoke border border-1 p-3 px-4">Files:</div>
                                        <div className="col-8 bg-white border border-1 p-3 px-4">
                                            <button className="custom-btn">Add File</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100 mt-3">
                                    <div className="row">
                                        <div className="col-6">
                                            <h6 className='m-3'>Player Status: Active</h6>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="custom-btn-danger m-3">Disable</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-3 text-center">
                        <div className="row">
                            <div className="col-12 col-lg-10">
                                <select class="form-select w-75 mt-3" aria-label="Default select example">
                                    <option selected>Alexis Mccray</option>
                                    <option value="1">usama Hardy</option>
                                    <option value="2">Illana Valenzuela</option>
                                    <option value="3">Quail Adams</option>
                                </select>
                            </div>
                        </div>
                        <div className="card p-1 mt-4">
                            <img src="https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/blank_full-682517a8c0e10cd275f0989e7e75eba4.gif" className='img-fluid' alt="" />
                        </div>
                        <button className="custom-btn mt-3">Edit Photo</button>
                    </div>
                </div>
            </div>
        </>
    )
}
