import { NavLink } from "react-router-dom";
import React from 'react'
import cal from "../utilidades/img/calculadora.jpg"
import tateti from "../utilidades/img/tateti.png"
import memograma from "../utilidades/img/memograma.png"


export default function AplicacionesSimples() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-7">
          <h1 className="text-light">Aplicaciones simples</h1>
          <p className="text-light ">
            Aplicaciones echas solo con HTML, CSS, JS nativo 
          </p>

          <h2 className="text-light">Calculadora</h2>
          <p className="text-light ">
            Una simple calculadora.
          </p>
          <img src={cal} className="img-fluid"/>
          <br/><br/>
          <p className="text-light ">
           Esta es una calculadora echa con HTML, CSS y JavaScript nativo
           es un proyecto muy simple y me sirvió para aprender los eventos
           de javaScript. 
          </p>
          <h2 className="text-light">funcionamiento</h2>
          <p className="text-light ">
           Este proyecto esta basado en el uso del evento <b>onclick</b>,
           al pulsar los botones se pueden realizar las distintas funciones
           para crear la funcionalidad. 
          </p>

          <h2 className="text-light">TATETI</h2>
          <p className="text-light ">
            El clásico juego de tres en línea
          </p>
          <img src={tateti} className="img-fluid"/>
          <br/><br/>
          <h2 className="text-light">funcionamiento</h2>
          <p className="text-light ">
           Esta Aplicación también se basa en el evento <b>onclick </b>
           para leer las interacciones de los jugadores, todos los posibles
           resultados de victoria están guardados en un array, en el cual se
           compara después de cada turno si se cumple alguno de los casos para
           dar por terminado el juego, si después de 9 turnos no se cumple ningún
           caso se termina el juego con un empate
          </p>

          <h2 className="text-light">Memograma</h2>
          <p className="text-light ">
            Un juego para usar nuestra agilidad mental
          </p>
          <img src={memograma} className="img-fluid"/>
          <br/><br/>
          <h2 className="text-light">funcionamiento</h2>
          <p className="text-light ">
            De un array se genera otro desordenado aleatoriamente por cada nueva partida,
            luego con un contador de aciertos se puede saber si el juego termino.
          </p>
        </div>
        <div className="col-md-5">
          <div className="d-flex justify-content-center sticky-top">
            <div className="my-5 py-5 align-middle">
              <h2 className="text-light text-center mb-3">Proyectos</h2>
              <ul>
                <li style={{listStyle:"none"}}>
                  <p className="text-light">Calculadora :
                    <a href="https://dariodiazbaez.github.io/calculadora-js.github.io/" className="text-light mx-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/DarioDiazBaez/calculadora-js.github.io" target="_blank" className="  mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </p>
                </li>
                <li style={{listStyle:"none"}}>
                  <p className="text-light">TATETI :
                    <a href="https://dariodiazbaez.github.io/tatetigithub.io/" className="text-light mx-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/DarioDiazBaez/tatetigithub.io" target="_blank" className="  mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </p>
                </li>
                <li style={{listStyle:"none"}}>
                  <p className="text-light">Memograma :
                    <a href="https://dariodiazbaez.github.io/memogramagithub.io/" className="text-light mx-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/DarioDiazBaez/memogramagithub.io" target="_blank" className="  mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
      <div className="row ">
        <NavLink style={{textDecoration: "none"}} to="/" className="d-flex justify-content-center mb-5">
          <h2 className="text-light ">Volver</h2>
        </NavLink>
      </div>
    </div>
  )
}