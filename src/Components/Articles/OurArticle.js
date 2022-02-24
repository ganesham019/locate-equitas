import React from 'react'
import Equitas from '../../Images/Equitas.svg';
import imageO from '../../Images/imageO.svg';
import imageTh from '../../Images/imageTh.svg';
import imageTw from '../../Images/imageTw.svg';
function OurArticle() {
  return (
    <>
      <div className="container-fluid ArticleComponent">
        <div className="container text-center ">
          <p className="ArticalText1 mx-auto text-center">Our Articles</p>
          <div className="row mt-5">
            <div className="col-md-4">
              <img src={Equitas} class="img-fluid " alt="" />
            </div>
            <div className="col-md-8 text-left">
              <p className="ArticalText2">Kolkata: <b>Equitas Small Finance Bank</b> has decided to sell equity shares to institutional investors at Rs 53.59 a piece, which is at about 5 per cent discount of the floor price of Rs 56.40.</p>
              <p className="ArticalText3">The bank's share closed Friday at Rs 53.45 on BSE. The face of value of the shares is Rs 10.</p>
            </div>
          </div>
          <br />
          <div className=" text-left">
            <p className="MainText1"> The share sale through qualified institutional placement (QIP) is aimed at reducing the promoters holding to 75 per cent and raising public shareholding to a minimum 25 per cent, as stipulated by the market regulator Securities & Exchange Board of India.</p>
            <p className="MainText2">The promoter of the bank – Equitas Holdings – holds 81.36 per cent while the balance 18.64 per cent lies with the public, according to the shareholding pattern at the end of December 2021.</p>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <p className="ArticalText4">Equitas Small Finance Bank stock zooms over 9% in early trade, here's why</p>
              <p className="ArticalText5">Equitas Small Finance Bank stock climbed up to 9.45% to Rs 58.5 against the previous close of Rs 53.45 on BSE</p>
            </div>
            <div className="col-md-6">
              <div className="">
                <div className=" OneImage">
                  <img src={imageO} class="img-fluid " alt="" />
                </div>
                <div className=" TwoImage">
                  <img src={imageTw} class="img-fluid " alt="" />
                </div>
                <div className=" ThreeImage">
                  <img src={imageTh} class="img-fluid " alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurArticle