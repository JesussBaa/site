import React from 'react'
import Image from 'react-bootstrap/esm/Image';

export default function SliderInit(){
    return(
        <div>
            <div id="carruselInicio" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{ backgroundColor: '#85929E' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carruselInicio" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carruselInicio" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carruselInicio" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <Image src="../carrusel_inicio/img1.png"  className="d-block mx-auto" alt="Primera imagen." rounded/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Titulo</h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000" >
                        <Image src="../carrusel_inicio/img2.png" width='auto' className="d-block mx-auto" alt="Segunda imagen. " rounded/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Titulo</h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <Image src="../carrusel_inicio/img3.png" width='auto' className="d-block mx-auto" alt="Tercera imagen." rounded/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Titulo</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carruselInicio" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carruselInicio" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}