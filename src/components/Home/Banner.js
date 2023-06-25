import React from "react";
import crab from '../../images/icon-crab.png';
import './Banner.css';

export default function Banner(){
    return(
        <div className="body-banner"> 
        <main className="main-banner">
                    <div class="text-bx">
                <h1> Bibliocrab <b> virtualizando conhecimento </b></h1>
                <p>
                    Mergulhe conosco nesse mangue literário e divirta-se!
                </p>
                </div>

            <div class="img-bx">
                <img src={crab}/>
            </div>
        </main>

    </div>
    )
}