import React from "react";
import Map from "../../Images/Map.svg";
import { FaDirections } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
function OverMapsection() {
  return (
    <div className="container-fluid text-center mx-auto">
      <div className="container OverMapSection">
        <div className="row text-center">
          <div className="col-md-6 col-sm-12">
            <div class=" shadow ">
              <p className="CardText pt-4">Equitas Small Finance Bank</p>
              <div className="mt-3 p-3">
                <p className="CardTitle ">Address:</p>
                <p className="CardData">
                  50 A, Bawa Road, Alwarpet, Chennai - 600018
                </p>
                <p className="CardTitle">Phone:</p>
                <p className="CardData">+91 7824804912</p>
                <p className="CardTitle">Hours:</p>
                <p className="CardData">Closed for the day</p>
                <p className="CardTitle">2nd & 4th Saturday - Holiday</p>
              </div>

              <div className="CardButtons pl-3 pr-3 mx-auto text-center mt-2 mb-2   d-flex justify-content-between">
                <div className="justify-content-evenly">
                  <p className="btn btn-outline-dark">
                    <FaDirections /> Direction
                  </p>
                </div>
                <div className="">
                  <p className="btn btn-outline-dark">
                    <BiPhoneCall /> Call
                  </p>
                </div>
                <div className="">
                  <p className="btn btn-outline-dark">
                    <AiOutlineShareAlt /> Share
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-2">
            <img src={Map} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverMapsection;
