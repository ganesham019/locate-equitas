import React from 'react'
import Slider from "react-slick";
import { GiCapitol } from "react-icons/gi"
import Feature from '../../Images/Feature.svg';
function FeatureProduct() {
    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: false,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 3,
        initialSlide: 0,
        variableWidth: true,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                    initialSlide: 0,
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
        <>
            <div className="container-fluid SliderComponent pb-5">
                <div className="container text-center mx-auto ">
                    <p className="SliderText">Featured Products</p>
                    <div className="mt-5 pt-5 pb-5 mb-5 Slides text-center ">
                        <Slider  {...settings}>

                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3 ">Apply now</p> 
                            </div>
                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>

                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>

                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>

                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>

                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>

                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>

                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>
                            <div class="SlideCardF text-center">
                                <img src={Feature} class=" img-fluid" alt="" />
                                <p className="SliderTextF2 mt-4">SelfeSavings is a digital bank account which can be opened by Aadhaar number, PAN and other basic details.</p>
                                <p className="SliderTextF3 mt-3">Apply now</p> 
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct

// <div className=" SliderCardF  " >
//                                 <img src={Feature} class="img-fluid " alt="" />
//                                 {/* <p className="SliderTextF2 mt-4"> Working Capital loans to suit your business needs</p>
//                                 <p className="SliderText3 mt-3">Apply now</p> */}
//                             </div>