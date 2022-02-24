import React from 'react'
import Slider from "react-slick";
import { GiCapitol } from "react-icons/gi"
import iphone from "../../Images/iphone.svg";
function FestivalOffer() {
    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: false,
        speed: 3000,
        initialSlide: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className="container-fluid pb-5 mb-5">
            <div className="container text-center pb-5">
                <p className="OfferText1 text-center">Festive Offers</p>
                <div className="mt-5 pt-5  Slides text-left ">
                    <Slider  {...settings}>
                        <div className=" SliderCardOffer p-3 " style={{width:360}}>
                            <img src={iphone} class="img-fluid " alt="" />
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}} />
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}}/>
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}}/>
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}}/>
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}}/>
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}}/>
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}}/>
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                        <div className=" SliderCardOffer p-3 " >
                            <img src={iphone} class="img-fluid " alt="" style={{width:360}}/>
                            <p className="FestivalOfferText1 mt-4"> iphone 12</p>
                            <p className="FestivalOfferText2 mt-4">Cash back up to Rs.5,000</p>
                            <p className="FestivalOfferText3 mt-4"> Valid till : March 31th</p>
                            <div className="FestivalTextO3 text-center mx-auto ">Apply now</div>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default FestivalOffer


