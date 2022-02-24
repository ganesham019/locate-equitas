import React from 'react'
import Slider from "react-slick";
import { GiCapitol } from "react-icons/gi"
function PSlider() {
    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        variableWidth: true,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
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
            }
        ]
    };
    return (
        <>
            <div className="container-fluid SliderComponent ">
                <div className="container text-center mx-auto">
                    <p className="SliderText">Personalized services that caters to your banking needs</p>
                    <div className="mt-5 pt-5 pb-0 Slides text-center ">
                        <Slider  {...settings}>

                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                            <div className=" SliderCard p-3 " style={{ width: 270 }}>
                                <GiCapitol className="GICapital" />
                                <p className="SliderText2 mt-4"> Working Capital loans to suit your business needs</p>
                                <p className="SliderText3 mt-3">Apply now</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PSlider