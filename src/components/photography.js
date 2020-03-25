import React from 'react'
import NavBar from "./navigation/navbar"
import Footer from "./navigation/footer"
import { Zoom } from "react-slideshow-image"
import aboutImage from "../assets/images/SS3.jpg"
import aboutImage2 from "../assets/images/SS7.jpg"
import aboutImage3 from "../assets/images/SS15.jpg"


const images = [
    '../assets/images/SS1.jpg',
    '../assets/images/SS2.jpg',
    '../assets/images/SS3.jpg',
    '../assets/images/SS4.jpg',
    '../assets/images/SS5.jpg',
    "../assets/images/SS6.jpg",
    "../assets/images/SS7.jpg",
    "../assets/images/SS8.jpg",
    "../assets/images/SS9.jpg",
    "../assets/images/SS10.jpg",
    "../assets/images/SS11.jpg",
    "../assets/images/SS12.jpg",
    "../assets/images/SS13.jpg",
    "../assets/images/SS14.jpg",
    "../assets/images/SS15.jpg",
    "../assets/images/SS16.jpg",
    "../assets/images/SS17.jpg",
    
  ];
   
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
   
  const Slideshow = () => {
      return (
           <div className="slideshow-wrapper">
              <div className="page-container">
                <div className="content-wrapper">
                <h1>IV Imagery</h1>
                <div className="about-pics">
                    <img src={aboutImage} alt="iv-imagery" id="about-photo" />
                    <img src={aboutImage2} alt="iv-imagery" id="about-photo" />
                    <img src={aboutImage3} alt="iv-imagery" id="about-photo" />
                </div>
                <div className="about-discription">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim repellat explicabo architecto, impedit ad eos vero nostrum, minus quidem magni, expedita itaque nisi nihil. Aspernatur ullam ut ea, impedit optio reprehenderit, corrupti repellat itaque eligendi molestias alias. Aliquid veniam quod unde inventore. Tempora fugit vel fugiat magnam nulla laborum ipsa hic, dicta iure consequatur minus in minima nihil itaque, aliquam incidunt unde saepe, corrupti necessitatibus odit delectus totam voluptatum? Quod sit vitae commodi! Similique quisquam omnis voluptatibus optio! Laborum, consequuntur nemo amet eos sunt nulla iusto excepturi maxime. Distinctio veritatis tempora tempore maiores rem modi voluptate odit, facere, eligendi sunt dicta, earum officia perspiciatis quas laboriosam reprehenderit consequatur minima beatae. Quae libero commodi sint, veritatis ab eligendi exercitationem iure consequuntur cum assumenda numquam ad deleniti neque perferendis maiores voluptatem velit? Rem deleniti illum maiores nulla ducimus! Nesciunt praesentium, sint aliquam ab sequi ratione quisquam commodi minima blanditiis assumenda, numquam quidem fugiat aspernatur dicta doloribus molestias explicabo incidunt? Aspernatur sequi accusamus nam enim temporibus pariatur soluta laboriosam optio sint fuga voluptatibus repudiandae voluptate eius porro quam ab vitae eos dolore est ratione sed, iure quis amet. Dignissimos doloremque quos alias, eos voluptatum deleniti quas magnam voluptas illo tempora dolorum? Neque.</p>
                </div>
                </div>
            </div> 
            <NavBar />
            <div className="name-wrapper">
            </div>
            <div className="slide-container">
                <Zoom {...zoomOutProperties}>
                    {
                    images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
                    }
                </Zoom>
            </div>
            <Footer />
         </div>
      )
  } 
  export default Slideshow
