import React from 'react';
import { NavLink } from "react-router-dom";
import HomePagecss from "./HomePagecss.css"
import html from "../utilidades/svg/html.svg"
import css from "../utilidades/svg/css.svg"
import js from "../utilidades/svg/js.svg"
import react from "../utilidades/svg/react.svg"
import redux from "../utilidades/svg/redux.svg"
import bootstrap from "../utilidades/svg/bootstrap.svg"
import sass from "../utilidades/svg/sass.svg"
import less from "../utilidades/svg/less.svg"
import git from "../utilidades/svg/git.svg"
import linkedin from "../utilidades/svg/linkedin.svg"

export default function HomePage() {
  return (
    <div className="container pt-5" >
      <div className="row">
        <div className="col-md-6">
          <div className="">
            <h1 className="text-light letras">DARIO DIAZ BAEZ</h1>
          </div>
          <h2 className="py-1 px-1 bg-light text-center letras">FRONT-END Developer</h2>
          <p className="text-light text-break ">Un programador front end con ganas de aprender creciendo contigo.
          <a href="https://drive.google.com/file/d/1jZeIzSslxp_vVD-MFeX2G-lxaNjaEcEH/view?usp=sharing" target="_blank" style={{textDecoration:"none"}} className="text-light">
            <b> Curriculum Vitae </b>
          </a></p>
{/*Accordion--------------------------------*/}
          <div className="bg-secondary">
            <div className="accordion-button collapsed bg-secondary" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
              <h3 className=" my-auto">Skillset</h3>
            </div>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <img src={html} width="35px" className="mx-2 my-2" title="HTML" />
                <img src={css} width="35px" className="mx-2 my-2" title="CSS" />
                <img src={js} width="35px" className="mx-2 my-2" title="JAVASCRIPT" />
                <a href="https://es.reactjs.org/" target="_blank">
                  <img src={react} width="40px" className="mx-2 my-2" title="REACT" />
                </a>
                <a href="https://redux.js.org/" target="_blank">
                  <img src={redux} width="40px" className="mx-2 my-2" title="REDUX" />
                </a>
                <a href="https://getbootstrap.com/" target="_blank">
                  <img src={bootstrap} width="45px" className="mx-2 my-2" title="BOOTSTRAP" />
                </a>
                <a href="https://sass-lang.com/" target="_blank">
                  <img src={sass} width="45px" className="mx-2 my-2" title="SASS" />
                </a>
                <a href="https://lesscss.org/" target="_blank">
                  <img src={less} width="65px" className="mx-2 my-2" title="LESS" />
                </a>
                <a href="https://git-scm.com/" target="_blank">
                  <img src={git} width="40px" className="mx-2 my-2" title="GIT" />
                </a>
              </div>
            </div>
          </div>
{/*Accordion--------------------------------*/}
          <br/>
          <h2 className="text-light text-break ">Proyectos</h2>
{/*Projects---------------------------------*/}
          <div className="d-flex flex-wrap">

            <NavLink style={{textDecoration: "none"}} to="appreact" className="card mx-2 my-2 py-1 px-1">
              <div className="card-body">
                <p className="card-text text-light ">Aplicaciones con React</p>
              </div>
            </NavLink>

            <NavLink style={{textDecoration: "none"}} to="appsimple" className="card mx-2 my-2 py-1 px-1">
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
                <a href="https://www.linkedin.com/in/dario-diaz-baez-a4a348229/" target="_blank" className="d-inline-block">
                  <img src={linkedin} width="45px"/>
                </a>
                <a href="https://drive.google.com/file/d/1jZeIzSslxp_vVD-MFeX2G-lxaNjaEcEH/view?usp=sharing" target="_blank" className="d-inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" className="bi bi-file-person" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <form action="https://formspree.io/f/moqrddkk" method="POST">
                <input className="rounded border-0 form-control shadow-none my-3" required="" type="email" name="email" placeholder="Tu Email: Para que pueda responderte" />
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