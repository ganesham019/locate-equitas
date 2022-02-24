import React from "react";
import carousel1 from "../../Images/carousel1.svg";
function Carouse() {
  return (
    <div>
      <div id="carouselId" className="carousel slide text-center mx-auto" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img src={carousel1} className="img-fluid" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img src={carousel1} className="img-fluid" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img src={carousel1} className="img-fluid" alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carouse;
