import React from 'react'
import Offer from "../../Images/Offer.svg";
function OurOffers() {
    return (
        <>
            <div className="container-fluid OfferComponent">
                <div className="container text-center mx-auto">
                    <p className="OfferText1 text-center">Our Offers</p>
                    <div className="row">
                        <div className="col-md-4 my-auto   justify-content-start pr-5">
                            <p className="Offertext2">Store our savings the easy way</p>
                            <p className="Offertext3">get a card with a credit limit of up to Rs.25,000</p>
                            <div className="SliderTextO3 ">Apply now</div>
                        </div>
                        <div className="col-md-8 mt-5  ">
                            <img src={Offer} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurOffers