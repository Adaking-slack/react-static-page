import React from "react"
import { FaEnvelope, FaLinkedinIn} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import About from "./About";
import  Footer  from "./Footer";
import Interest from "./interest";

export default function Profile() {
    return (
        <>
            <main>
                <img src="/images/Adaking.jpg" alt="ada" />
                <div className="details">
                <p className="para">Adaeze Emelike</p>
                <h5>Frontend Developer</h5>
                </div>

                <div className="btn">
                    
                <button className="btn1"> <a link href="mailto: emelikepatience961@gmail.com">
                <IconContext.Provider value= {{ className : "react-icons" }}>
                   <FaEnvelope  />
                </IconContext.Provider>

                    Email </a> </button>
                    
                <button className="btn2"><a link href="https://www.linkedin.com/in/adaeze-emelike-612a8b196/">
                <IconContext.Provider value= {{ className : "react-icons" }}>
                    <FaLinkedinIn />
                </IconContext.Provider>

                    
                    Linkedin </a></button>
                    </div>
                     <div className="more-details">
                    <About />
                    <Interest />
</div>
                    <Footer />
            </main>
        </>
    )
}