import React from "react";
import Callback from "../../Images/Callback.svg";
import Captache from "../../Images/Captache.svg";
function CallBack() {
  return (
    <div className="container-fluid">
      <div className="container OverMapSection">
        <div className="row text-center">
          <div className="col-md-6 col-sm-12 p-0 m-0 order-md-0 order-1  my-auto">
            <img src={Callback} class="img-fluid pt-5" alt="" />
          </div>
          <div className="col-md-6 col-sm-12 p-0 m-0 order-md-1  order-0 CallBackForm ">
            <div class=" p-0 m-0">
              <p className="CardText pt-4">Request a Call Back</p>
              <div className="Form mt-4">
                <p className="FormText">
                  Write to us with your query and we shall get back
                </p>
                <div className="col-sm-10 pt-2 mx-auto text-center">
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
                  <input
                    type="tel"
                    class="form-control mt-4"
                    id="exampleFormControlInput1"
                    placeholder="Mobile number*"
                  ></input>
                  <textarea
                    class="form-control mt-4"
                    name=""
                    id=""
                    rows="4"
                    placeholder="What are You Looking for ..."
                  ></textarea>
                  <img src={Captache} class="img-fluid mt-3" alt="" />

                  <div class="mt-2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    &nbsp; &nbsp;
                    <label for="vehicle1"> i’m not a robot</label>
                  </div>
                  <div class="btn btn-primary w-100 p-2 ">Submit</div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallBack;
