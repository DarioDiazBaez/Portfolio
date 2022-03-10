import React from 'react';
import { NavLink } from "react-router-dom";
import HomePagecss from "./HomePagecss.css"


export default function HomePage() {
  return (
    <div className="container pt-5" >
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-light letras">DARIO DIAZ BAEZ</h1>
          <h2 className="py-1 px-1 bg-light text-center letras">FRONT-END Developer</h2>
          <p className="text-light text-break ">Un programador front end con ganas de aprender creciendo contigo.</p>
{/*Accordion--------------------------------*/}
          <div className="bg-secondary">
            <div className="accordion-button collapsed bg-secondary" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
              <h3 className=" my-auto">Skillset</h3>
            </div>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <img src="svg/html.svg" width="35px" className="mx-2" title="HTML" />
                <img src="svg/css.svg" width="35px" className="mx-2" title="CSS" />
                <img src="svg/js.svg" width="35px" className="mx-2" title="JAVASCRIPT" />
                <a href="https://es.reactjs.org/" target="_blank">
                  <img src="svg/react.svg" width="40px" className="mx-2" title="REACT" />
                </a>
                <a href="https://getbootstrap.com/" target="_blank">
                  <img src="svg/bootstrap.svg" width="45px" className="mx-2" title="BOOTSTRAP" />
                </a>
                <a href="https://sass-lang.com/" target="_blank">
                  <img src="svg/sass.svg" width="45px" className="mx-2" title="SASS" />
                </a>
                <a href="https://lesscss.org/" target="_blank">
                  <img src="svg/less.svg" width="65px" className="mx-2" title="LESS" />
                </a>
                <a href="https://git-scm.com/" target="_blank">
                  <img src="svg/git.svg" width="40px" className="mx-2" title="GIT" />
                </a>
              </div>
            </div>
          </div>
{/*Accordion--------------------------------*/}
          <br/>
          <h2 className="text-light text-break ">Proyectos</h2>
{/*Projects---------------------------------*/}
          <div className="d-flex flex-wrap">

            <NavLink style={{textDecoration: "none"}} to="buscadorimg" className="card mx-2 my-2 py-1 px-1">
              <div className="card-body">
                <p className="card-text text-light ">Buscador de Imagenes</p>
              </div>
            </NavLink>

            <NavLink style={{textDecoration: "none"}} to="memegenerator" className="card mx-2 my-2 py-1 px-1">
              <div className="card-body">
                <p className="card-text text-light ">Generador de memes</p>
              </div>
            </NavLink>

            <NavLink style={{textDecoration: "none"}} to="calculadora" className="card mx-2 my-2 py-1 px-1">
              <div className="card-body">
                <p className="card-text text-light ">Aplicaciones simples</p>
              </div>
            </NavLink>

            <NavLink style={{textDecoration: "none"}} to="portafolio" className="card mx-2 my-2 py-1 px-1">
              <div className="card-body">
                <p className="card-text text-light ">Portafolio</p>
              </div>
            </NavLink>

          </div>
{/*Projects---------------------------------*/}
        <br/>
        </div>
        <div className="col-md-6"></div> 
      </div>
      <div className="row">
{/*Contacto---------------------------------*/}
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center row" id="contacto">
            <div className="col-12 col-md-5">
              <h1 className="text-light text-center d-block ">Contacta conmigo</h1>
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a" target="_blank" className="d-inline-block">
                  <img src="svg/linkedin.svg" width="45px"/>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="55" fill="white" className="bi bi-envelope-paper-heart d-inline-block" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <form action="https://formspree.io/f/moqrddkk" method="POST">
                <input className="rounded border-0 form-control shadow-none my-3" required="" type="email" name="email" placeholder="Tu Email:" />
                <textarea className="rounded border-0 form-control shadow-none my-3" required="" name="message" placeholder="Tu Mensaje:"></textarea>
                <button className="btn btn-secondary form-control my-3" type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
{/*Contacto---------------------------------*/}   
      </div> 
    </div>
  )
}