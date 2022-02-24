import React from 'react'
import Slider from "react-slick";
import { GiCapitol } from "react-icons/gi"
import { FaDirections } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
function Nearby() {
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

            <div className="container text-center mx-auto mt-5 pt-5">
                <p className="SliderText">Nearby Equitas Small Finance Bank</p>
                <div className="my-auto pt-5 pb-0 Slides text-center ">
                    <Slider  {...settings}>
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                        <div className=" SliderCardNearby p-3 " style={{ width: 350 }}>
                            <p className="SliderTextNearby mt-4">Equitas Small Finance Bank</p><br />
                            <p className="SliderTextNearby2 mt-4">  No 246, Madipakkam Main Road
                                <br />
                                Madipakkam
                                <br />
                                Chennai - 600091</p>

                            <div className="NearbyCardButtons  mt-5 my-auto mb-2   d-flex justify-content-between">
                                <div className="">
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
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Nearby