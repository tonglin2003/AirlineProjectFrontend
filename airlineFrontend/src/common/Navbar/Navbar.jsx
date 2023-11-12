import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to="/">Features</Link>
                <Link class="nav-item nav-link" to="/">Pricing</Link>
                <Link class="nav-item nav-link" to="/">Disabled</Link>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}