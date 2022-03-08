import React from 'react'
import {AiOutlineTwitter,AiOutlineInstagram,AiFillFacebook,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
function Footer() {
    return (
        <div className="container-fluid mt-5 pt-5">
            <div className="container mt-5 pt-5">
                <div className="d-flex justify-content-end Socialicons">
                    <div><AiOutlineTwitter/></div>
                    <div><AiOutlineInstagram/></div>
                    <div><AiFillFacebook/></div>
                    <div><AiFillLinkedin/></div>
                    <div><AiFillYoutube/></div>
                </div>
                <hr />
                <div className="row text-center">
                    <div className="col-sm-5 text-left">
                        <p>Allrights reserved © 2022</p>
                    </div>
                    <div className="col-sm-7 text-left mx-auto">
                        <p>Powered by Tuskmelon</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer