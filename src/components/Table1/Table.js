import React from 'react'

export default function Table() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Contact Info</th>
                                        <th scope="col" className="border-end"># / Position</th>
                                        <th scope="col">Manager</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAMFBMVEXk5ueutLeor7Lh4+Tn6eqrsbXBxsjHy83Z3N27wMK0ubzd4OHQ09XU2NnKztC+w8Vn9lA2AAACs0lEQVRoge1Z25KkIAwVCMpF9P//dsHu7XVmejCxE9gHTpVVvp2TK5BM08DAwMDAwMDAwMDAwH8PAIjOuWjyT3tys+5Ba21t/sKSmkqAKXlrrXoh/8+xnYIUTtx/Jai9jQIwXv9gfzhhaSAA1p+2vxQEI60A5vfGP6GdsID5d+sfLkiiAq7oZQXAckmfBUQx+krqnQVI8RsUvbJeJgLgUfS5CFYJAZCqlXdGMAL8U8DSK7vxOwBWtPkZ/A4AvPkiDnC45H8icPOjWs/JAY6bn8Ke+bmP4kgyXynmHoRsvScHMPPTwp97IO8phO69L/t5j2FS9R/8vB2AmP6Zf+blJ4ZfqcHPyk+l545/7/zvXf+9+1/n/t/7/Ot+/ve+/0yO5gD2+2fv+2/v+z/p/SMxCOr+/uv8/kX3IKn3P7oJy7BP2PkPe+s5oe/8q4wfr+Z/QrmHFGCl55+9579l/r33nH8XBW/n/9Y320DAtAb1ff8hHvkvCsr+R5X1j9VahzlNzVdQ8Nx/ubL/asxeCI2J0cXjM6adhswS0zb7EEKJ+7EGy/9+X1IswkS5AdziQw772/LTys+rmIQc7c2/p/4iIixOQEImDxZ5/pdiZK2Hsu9UlPu/VWFla8UAa6DcfR/IcWDxQWYnmX5ygmVQkG2/x34oUNuH7MbfZz8UhE+uQ9n1H8PO9/l/WXQTBYR7JyM4ZL1fQt95jZInLhXciAFsfPRZwE6lp867rgTQ3mTc9CULCQJg40j8bwLwHoDEbf0hAD0RjgLsCv8yhA86fh2omSx/7r2AykHqpJUAuyLMp07aSUCYz196/3A9l5Q1/9oBgtEvuBqPCCb/A/7CfuqeiYz6dIw4ZaejnoG8p/5bVHuQdPYX1NxPXnPeQO0QMA34Uy39tDyqCWgaoJYAAwMDAwON8AefgSEeyKsQvwAAAABJRU5ErkJggg==" height="50" width="50" alt="" srcset="" /></th>
                                        <td>Drake Hardy <br /> Team Owner</td>
                                        <td>Nehru Wade <br /><a href="mailto:zucaz@mailinator.com">zucaz@mailinator.com</a> - Et aliquid proident</td>
                                        <td className="border-end">#150 - Perspiciatis hic do</td>
                                        <td><button className="custom-btn">Edit</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAMFBMVEXk5ueutLeor7Lh4+Tn6eqrsbXBxsjHy83Z3N27wMK0ubzd4OHQ09XU2NnKztC+w8Vn9lA2AAACs0lEQVRoge1Z25KkIAwVCMpF9P//dsHu7XVmejCxE9gHTpVVvp2TK5BM08DAwMDAwMDAwMDAwH8PAIjOuWjyT3tys+5Ba21t/sKSmkqAKXlrrXoh/8+xnYIUTtx/Jai9jQIwXv9gfzhhaSAA1p+2vxQEI60A5vfGP6GdsID5d+sfLkiiAq7oZQXAckmfBUQx+krqnQVI8RsUvbJeJgLgUfS5CFYJAZCqlXdGMAL8U8DSK7vxOwBWtPkZ/A4AvPkiDnC45H8icPOjWs/JAY6bn8Ke+bmP4kgyXynmHoRsvScHMPPTwp97IO8phO69L/t5j2FS9R/8vB2AmP6Zf+blJ4ZfqcHPyk+l545/7/zvXf+9+1/n/t/7/Ot+/ve+/0yO5gD2+2fv+2/v+z/p/SMxCOr+/uv8/kX3IKn3P7oJy7BP2PkPe+s5oe/8q4wfr+Z/QrmHFGCl55+9579l/r33nH8XBW/n/9Y320DAtAb1ff8hHvkvCsr+R5X1j9VahzlNzVdQ8Nx/ubL/asxeCI2J0cXjM6adhswS0zb7EEKJ+7EGy/9+X1IswkS5AdziQw772/LTys+rmIQc7c2/p/4iIixOQEImDxZ5/pdiZK2Hsu9UlPu/VWFla8UAa6DcfR/IcWDxQWYnmX5ygmVQkG2/x34oUNuH7MbfZz8UhE+uQ9n1H8PO9/l/WXQTBYR7JyM4ZL1fQt95jZInLhXciAFsfPRZwE6lp867rgTQ3mTc9CULCQJg40j8bwLwHoDEbf0hAD0RjgLsCv8yhA86fh2omSx/7r2AykHqpJUAuyLMp07aSUCYz196/3A9l5Q1/9oBgtEvuBqPCCb/A/7CfuqeiYz6dIw4ZaejnoG8p/5bVHuQdPYX1NxPXnPeQO0QMA34Uy39tDyqCWgaoJYAAwMDAwON8AefgSEeyKsQvwAAAABJRU5ErkJggg==" height="50" width="50" alt="" srcset="" />

                                        </th>
                                        <td>Reece Henson <br /><button className="custom-btn-success">Resend Invitation</button></td>
                                        <td><a href="mailto:kuxajiji@mailinator.com">kuxajiji@mailinator.com</a> - Exercitation quas no</td>
                                        <td className="border-end">#430 - Ullam quidem aut qui</td>
                                        <td><button className="custom-btn me-2">Edit</button> <button className="custom-btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAMFBMVEXk5ueutLeor7Lh4+Tn6eqrsbXBxsjHy83Z3N27wMK0ubzd4OHQ09XU2NnKztC+w8Vn9lA2AAACs0lEQVRoge1Z25KkIAwVCMpF9P//dsHu7XVmejCxE9gHTpVVvp2TK5BM08DAwMDAwMDAwMDAwH8PAIjOuWjyT3tys+5Ba21t/sKSmkqAKXlrrXoh/8+xnYIUTtx/Jai9jQIwXv9gfzhhaSAA1p+2vxQEI60A5vfGP6GdsID5d+sfLkiiAq7oZQXAckmfBUQx+krqnQVI8RsUvbJeJgLgUfS5CFYJAZCqlXdGMAL8U8DSK7vxOwBWtPkZ/A4AvPkiDnC45H8icPOjWs/JAY6bn8Ke+bmP4kgyXynmHoRsvScHMPPTwp97IO8phO69L/t5j2FS9R/8vB2AmP6Zf+blJ4ZfqcHPyk+l545/7/zvXf+9+1/n/t/7/Ot+/ve+/0yO5gD2+2fv+2/v+z/p/SMxCOr+/uv8/kX3IKn3P7oJy7BP2PkPe+s5oe/8q4wfr+Z/QrmHFGCl55+9579l/r33nH8XBW/n/9Y320DAtAb1ff8hHvkvCsr+R5X1j9VahzlNzVdQ8Nx/ubL/asxeCI2J0cXjM6adhswS0zb7EEKJ+7EGy/9+X1IswkS5AdziQw772/LTys+rmIQc7c2/p/4iIixOQEImDxZ5/pdiZK2Hsu9UlPu/VWFla8UAa6DcfR/IcWDxQWYnmX5ygmVQkG2/x34oUNuH7MbfZz8UhE+uQ9n1H8PO9/l/WXQTBYR7JyM4ZL1fQt95jZInLhXciAFsfPRZwE6lp867rgTQ3mTc9CULCQJg40j8bwLwHoDEbf0hAD0RjgLsCv8yhA86fh2omSx/7r2AykHqpJUAuyLMp07aSUCYz196/3A9l5Q1/9oBgtEvuBqPCCb/A/7CfuqeiYz6dIw4ZaejnoG8p/5bVHuQdPYX1NxPXnPeQO0QMA34Uy39tDyqCWgaoJYAAwMDAwON8AefgSEeyKsQvwAAAABJRU5ErkJggg==" height="50" width="50" alt="" srcset="" />

                                        </th>
                                        <td>Simone Cole</td>
                                        <td><a href="mailto:zyruqewab@mailinator.com">zyruqewab@mailinator.com</a> - Qui inventore volupt</td>
                                        <td className="border-end">#467 - Quisquam ut voluptat</td>
                                        <td><button className="custom-btn me-2">Edit</button> <button className="custom-btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAMFBMVEXk5ueutLeor7Lh4+Tn6eqrsbXBxsjHy83Z3N27wMK0ubzd4OHQ09XU2NnKztC+w8Vn9lA2AAACs0lEQVRoge1Z25KkIAwVCMpF9P//dsHu7XVmejCxE9gHTpVVvp2TK5BM08DAwMDAwMDAwMDAwH8PAIjOuWjyT3tys+5Ba21t/sKSmkqAKXlrrXoh/8+xnYIUTtx/Jai9jQIwXv9gfzhhaSAA1p+2vxQEI60A5vfGP6GdsID5d+sfLkiiAq7oZQXAckmfBUQx+krqnQVI8RsUvbJeJgLgUfS5CFYJAZCqlXdGMAL8U8DSK7vxOwBWtPkZ/A4AvPkiDnC45H8icPOjWs/JAY6bn8Ke+bmP4kgyXynmHoRsvScHMPPTwp97IO8phO69L/t5j2FS9R/8vB2AmP6Zf+blJ4ZfqcHPyk+l545/7/zvXf+9+1/n/t/7/Ot+/ve+/0yO5gD2+2fv+2/v+z/p/SMxCOr+/uv8/kX3IKn3P7oJy7BP2PkPe+s5oe/8q4wfr+Z/QrmHFGCl55+9579l/r33nH8XBW/n/9Y320DAtAb1ff8hHvkvCsr+R5X1j9VahzlNzVdQ8Nx/ubL/asxeCI2J0cXjM6adhswS0zb7EEKJ+7EGy/9+X1IswkS5AdziQw772/LTys+rmIQc7c2/p/4iIixOQEImDxZ5/pdiZK2Hsu9UlPu/VWFla8UAa6DcfR/IcWDxQWYnmX5ygmVQkG2/x34oUNuH7MbfZz8UhE+uQ9n1H8PO9/l/WXQTBYR7JyM4ZL1fQt95jZInLhXciAFsfPRZwE6lp867rgTQ3mTc9CULCQJg40j8bwLwHoDEbf0hAD0RjgLsCv8yhA86fh2omSx/7r2AykHqpJUAuyLMp07aSUCYz196/3A9l5Q1/9oBgtEvuBqPCCb/A/7CfuqeiYz6dIw4ZaejnoG8p/5bVHuQdPYX1NxPXnPeQO0QMA34Uy39tDyqCWgaoJYAAwMDAwON8AefgSEeyKsQvwAAAABJRU5ErkJggg==" height="50" width="50" alt="" srcset="" />

                                        </th>
                                        <td>Reece Henson <br /><button className="custom-btn-success">Resend Invitation</button></td>
                                        <td><a href="mailto:kuxajiji@mailinator.com">kuxajiji@mailinator.com</a> - Exercitation quas no</td>
                                        <td className="border-end">#430 - Ullam quidem aut qui</td>
                                        <td><button className="custom-btn me-2">Edit</button> <button className="custom-btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <i class="fa-solid fa-xmark text-center icon-cross" style={{ fontSize: "60px" }}></i>
                                <p className="mt-5 fs-1">Are you sure?</p>
                                <p className="text-center fs-5">Do you really want to delete these records? This process cannot be undone.</p>
                            </div>
                            <div className="d-flex flex-column-justify-content-center align-items-center">
                                <button class="btn btn-secondary rounded-1 w-50 me-2" data-bs-dismiss="modal">Cancel</button>
                                <button class="btn btn-danger rounded-1 w-50">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
