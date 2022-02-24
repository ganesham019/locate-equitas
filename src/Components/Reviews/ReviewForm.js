import React from 'react'
import './Review.css'
function ReviewForm() {
    return (
        <div>
            <div className="container-fluid ReviewSection">
                <div className="container mx-auto text-center">
                    <div className=" mx-auto text-center">
                        <div className="col-md-6 col-sm-12 p-0 m-0 order-md-1  order-0 ReviewForm  shadow mx-auto text-center">
                            <div class=" p-0 m-0">
                                <div className="Form ">
                                    <p className="FormTextReview mt-5 pt-5">
                                        Share your opinion with us
                                    </p>
                                    <div className="col-sm-10 text-dark pt-2 mx-auto text-left">
                                        <input
                                            type="email"
                                            class="form-control mt-4"
                                            id="exampleFormControlInput1"
                                            placeholder="Name *"
                                        ></input>
                                        <input
                                            type="email"
                                            class="form-control mt-4"
                                            id="exampleFormControlInput1"
                                            placeholder="Email id *"
                                        ></input>
                                        <br />
                                        <label className="text-dark text-left">Give us Rating</label>
                                        <br/>
                                        <label>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <span className="icon">★</span>
                                        </label>

                                        <textarea
                                            class="form-control mt-4"
                                            name=""
                                            id=""
                                            rows="4"
                                            placeholder="What are You Looking for ..."
                                        ></textarea>
                                        <br />
                                        <div class="btn btn-primary w-100 p-2 mb-5 ">Submit</div>
                                        <br />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm