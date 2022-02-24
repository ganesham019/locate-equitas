import React from 'react'
import Storys from '../../Images/Storys.svg';
function Story() {
    return (
        <div>
            <div className="container-fluid pt-5 mt-5">
                <div className="container">
                    <p className="StoryText1 text-center mx-auto">Our Success Story</p>
                    <br />
                    <div className="row ">
                        <div className="col-md-6">
                            <img src={Storys} class="img-fluid " alt="" />
                            <p className="StoryText2 p-2">Equitas Bank ties up with HDFC Bank to offer co-branded credit cards</p>
                        </div>
                        <div className="col-md-6">
                            <img src={Storys} class="img-fluid " alt="" />
                            <p className="StoryText2 p-2">Equitas Bank ties up with HDFC Bank to offer co-branded credit cards</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <img src={Storys} class="img-fluid " alt="" />
                            <p className="StoryText2 p-2">Equitas Bank ties up with HDFC Bank to offer co-branded credit cards</p>
                        </div>
                        <div className="col-md-6">
                            <img src={Storys} class="img-fluid " alt="" />
                            <p className="StoryText2 p-2">Equitas Bank ties up with HDFC Bank to offer co-branded credit cards</p>
                        </div>
                    </div>
                    <br/>
                    <div className="SliderTextO3 mx-auto">Read More</div>
                </div>
            </div>
        </div>
    )
}

export default Story