import React from "react";
import Footer from "../navegación/Footer";
import NavbarUp from "../navegación/NavbarUp";
import NavbarDown from "../navegación/NavbarDown";
import SliderInit from "../navegación/Slider_init";


export default function Inicio(){
    return(
        <section>
            <PaginaInicio/>
        </section>
               
    );
}

function PaginaInicio(){
    return(
        <div>
            <div>
                <NavbarUp/>
            </div>
            <div>
                <NavbarDown/>
            </div>
            <div>
                <SliderInit/>
            </div>
            <div>
                <Footer/>
            </div>
        </div> 
    );
}