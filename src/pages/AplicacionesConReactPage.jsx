import { NavLink } from "react-router-dom";
import React from 'react'
import buscadorimg from "../utilidades/img/buscadorimg.png"
import gif from "../utilidades/img/gif.png"
import tareas from "../utilidades/img/tareas.png"
import meme from "../utilidades/img/meme.jpg"

export default function BuscadorImg() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-7">
          <h1 className="text-light">Aplicaciones con React</h1>
          <p className="text-light ">
            Estas son Aplicaciones que fui haciendo mientras aprendía a usar react
          </p><br/>

          <h1 className="text-light" >Buscador de Imagenes</h1>
          <p className="text-light ">
            Una página web para buscar imágenes.
          </p>
          <img src={buscadorimg} className="img-fluid"/>
          <br/><br/>
          <p className="text-light">
            Este proyecto esta basado en la API de
            <a href="https://pixabay.com/api/docs/" target="_blank"><b> pixabay </b></a>
            el funcionamiento es muy facil solo se tiene que buscar alguna cosa y se mostraran
            imágenes relacionadas con la búsqueda. Es posible ver más resultados
            a los mostrados en pantalla con los botones "anterior" y "siguiente".
          </p>
          <h2 className="text-light">funcionamiento</h2>
          <p className="text-light">Está hecho en React utilizando el siclo de vida 
            clásico para la estructuración del proyecto, y para tener una búsqueda personalizada
            Se le cambian los parámetros en el link de la API.
          </p>

          <h1 className="text-light" >Buscador de GIF</h1>
          <p className="text-light ">
            Una página web para buscar GIF de memes.
          </p>
          <img src={gif} className="img-fluid"/>
          <br/><br/>
          <p className="text-light">
            Este proyecto esta basado en la API de
            <a href="https://pixabay.com/api/docs/" target="_blank"><b> pixabay </b></a>
            el funcionamiento es muy facil solo se tiene que buscar alguna cosa y se mostraran
            imágenes relacionadas con la búsqueda. Es posible ver más resultados
            a los mostrados en pantalla con los botones "anterior" y "siguiente".
          </p>
          <h2 className="text-light">funcionamiento</h2>
          <p className="text-light">Está hecho en React utilizando el siclo de vida 
            clásico para la estructuración del proyecto, y para tener una búsqueda personalizada
            Se le cambian los parámetros en el link de la API.
          </p>

          <h1 className="text-light" >Lista de tareas</h1>
          <p className="text-light ">
            Una página web para organizar las cosas que tenemos que hacer
          </p>
          <img src={tareas} className="img-fluid"/>
          <br/><br/>
          <p className="text-light">
            Un organizador de tareas en el que podemos marcar en rojo las
             que se han terminado, o eliminar de la lista para que no moleste
          </p>

          <h1 className="text-light" >Generador de memes</h1>
          <p className="text-light ">
           Una aplicación web para crear memes simples
          </p>
          <img src={meme} className="img-fluid"/>
          <br/><br/>
          <p className="text-light ">
            En este proyecto se pueden crear memes con un texto superior e inferior,
            este proyecto no es muy complejo, lo interesante es que se puede descargar la imagen generada.
          </p>
          <h2 className="text-light">funcionamiento</h2>
          <p className="text-light">
            La aplicación es un formulario con un selector y dos input text,
            en los cuales podemos personalizar nuestro meme, luego se imprime
            en pantalla los textos y la imagen seleccionada creando el meme.
             La parte interesante del proyecto es la funcionalidad de descargar
            la imagen, esto es posible gracias a un script llamado
            <a href="https://html2canvas.hertzen.com/" target="_blank"><b> html2canvas </b></a>
            el cual permite hacer capturas de elementos del DOM.
          </p>
        </div>
        <div className="col-md-5">
          <div className="d-flex justify-content-center sticky-top">
            <div className="my-5 py-5 align-middle">
              <h2 className="text-light text-center mb-3">Proyectos</h2>
              <ul>
                <li style={{listStyle:"none"}}>
                  <p className="text-light">Buscador de Imagenes :
                    <a href="https://dariodiazbaez.github.io/photo_finder/" className="text-light mx-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/DarioDiazBaez/photo_finder" target="_blank" className="  mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </p>
                </li>
                <li style={{listStyle:"none"}}>
                  <p className="text-light">Buscador de GIF :
                    <a href="https://dariodiazbaez.github.io/gif/" className="text-light mx-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/DarioDiazBaez/gif" target="_blank" className="  mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </p>
                </li>
                <li style={{listStyle:"none"}}>
                  <p className="text-light">Lista de tareas :
                    <a href="https://dariodiazbaez.github.io/lista-de-tareas/" className="text-light mx-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/DarioDiazBaez/lista-de-tareas" target="_blank" className="  mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </p>
                </li>
                <li style={{listStyle:"none"}}>
                  <p className="text-light">Generador de memes :
                    <a href="https://dariodiazbaez.github.io/meme-generator/" className="text-light mx-1" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/DarioDiazBaez/meme-generator" target="_blank" className="  mx-1">
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