import { NavLink } from "react-router-dom";
import React from 'react'
export default function NotFoundPage() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-light">404 Not Found</h1>
          <NavLink style={{textDecoration: "none"}} to="/">
            <p className="text-light ">Home</p>
          </NavLink>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </div>
  )
}