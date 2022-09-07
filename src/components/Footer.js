import React from "react";
import { FaTwitter, FaFacebookF, FaGithubSquare} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Footer (){
    return(
    <footer>
        


 <IconContext.Provider value= {{ className : "social-icons" }}>
    <a href="https://twitter.com/Adazoee">
 <FaTwitter />
</a>
< a href="https://www.facebook.com/adaeze.emelike.9/">
 <FaFacebookF />
 </a>
 <a href="https://github.com/Adaking-slack">
 <FaGithubSquare />      
 </a>      
                </IconContext.Provider>

 </footer>
    )
}