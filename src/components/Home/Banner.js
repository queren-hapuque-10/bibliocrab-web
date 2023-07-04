import React from "react";
import icon_crab from '../../images/icon_crab.png';
import './Banner.css';
import banner from '../../images/1.jpg';

export default function Banner(){
    return(
        <div className="body-banner">
        <main className="main-banner">
            <img src={banner}/>
                  {/* <div class="text-bx">
                <h1> Bibliocrab <b> virtualizando o conhecimento </b></h1>
                <p>
                    Prepare-se para uma imersão literária!
                </p>
                </div>


            <div class="img-bx">
                <img src={icon_crab}/>
            </div>*/} 
        </main>


    </div>
    )
}
